(() => {
  'use strict';
  const categories = {
    restaurant: {label:'식당', color:'#b23a3e', path:'M5 3v6m3-6v6m3-6v6M5 6h6m-3 3v12M18 3c-3 2-3 8 0 8h2V3h-2Zm2 8v10'},
    cafe: {label:'카페·베이커리', color:'#a57423', path:'M4 8h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm13 1h2a3 3 0 0 1 0 6h-2M7 3v2m4-2v2m4-2v2'},
    grocery: {label:'식품', color:'#687950', path:'M3 4h3l2 12h11l2-9H7M9 20h.01M18 20h.01'},
    shopping: {label:'쇼핑', color:'#746584', path:'M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2'},
    beauty: {label:'뷰티', color:'#ac6c7e', path:'m8 8 12 12M8 16 20 4M7 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'},
    medical: {label:'의료', color:'#287e86', path:'M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z'},
    sport: {label:'태권도·스포츠', color:'#346c94', path:'M8 3 3 6 1 11l4 2 2-4-1 12h12L17 9l2 4 4-2-2-5-5-3M8 3l4 7 4-7M6.5 14h11M6.5 16h11M11 14h2v2h-2ZM12 16l-2 4m3-4 2 3'},
    culture: {label:'교육·문화', color:'#78558f', path:'M12 5C8 3 5 3 2 4v15c3-1 6-1 10 1m0-15c4-2 7-2 10-1v15c-3-1-6-1-10 1V5Z'},
    travel: {label:'여행', color:'#a46c35', path:'M8 6V3h8v3M4 6h16v14H4V6Zm4 0v14m8-14v14M6 20v1m12-1v1'},
    other: {label:'기관·기타', color:'#6c7376', path:'m3 9 9-6 9 6H3Zm2 3v7m5-7v7m4-7v7m5-7v7M3 21h18'}
  };
  const places = window.BUSINESSES || [];
  const byId = new Map(places.map(p => [p.id,p]));
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeLink = value => /^https?:\/\//i.test(value || '') ? escape(value) : '';
  const normalize = text => text.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/\s/g,'');
  const icon = category => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${categories[category].path}"/></svg>`;
  const distanceKm = (a,b) => { const rad = x=>x*Math.PI/180; const dLat=rad(b.lat-a.lat), dLng=rad(b.lng-a.lng); const h=Math.sin(dLat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLng/2)**2; return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h))); };
  const distanceLabel = p => {const d=distanceKm(userPosition,p); return d<1 ? `${Math.round(d*1000)}m` : `${d.toFixed(1)}km`;};
  let activeCategory='all', selectedId=null, userPosition=null, map=null, userMarker=null;
  const markers = new Map();
  let visiblePlaces=places;
  const directions = p => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.lat+','+p.lng)}`;
  const external = (href,label,klass='') => href ? `<a class="${klass}" href="${safeLink(href)}" target="_blank" rel="noopener noreferrer">${label}</a>` : '';
  $('filters').innerHTML = `<button type="button" class="filter active" data-category="all" aria-pressed="true">전체 <span>${places.length}</span></button>` + Object.entries(categories).map(([key,c])=>`<button type="button" class="filter" data-category="${key}" aria-pressed="false" style="--category:${c.color}">${icon(key)}${c.label}<span>${places.filter(p=>p.category===key).length}</span></button>`).join('');
  function showDetail(id, pan=true) {
    const p=byId.get(id); if(!p)return;
    selectedId=id;
    const c=categories[p.category];
    $('detail-card').hidden=false;
    document.querySelector('.business-sidebar').scrollTop=0;
    $('detail-card').innerHTML=`<button class="detail-close" aria-label="업체 상세 닫기" type="button">×</button><div class="detail-category" style="color:${c.color}">${icon(p.category)}${c.label}${userPosition ? ` · 직선거리 ${distanceLabel(p)}`:''}</div><h2>${escape(p.name)}</h2><p class="detail-address">${escape(p.address)}</p>${p.phone ? `<a class="phone-link" href="tel:${escape(p.phone.replace(/[^+\d]/g,''))}">전화 ${escape(p.phone)}</a>`:''}${p.note ? `<p class="detail-address">${escape(p.note)}</p>`:''}<div class="detail-actions">${external(directions(p),'길찾기 ↗','route-link')}${external(p.google,'사진·리뷰 ↗')}${external(p.website,'웹사이트 ↗')}</div>`;
    $('detail-card').querySelector('.detail-close').addEventListener('click',()=>{selectedId=null;$('detail-card').hidden=true;highlightSelection();});
    highlightSelection();
    if(map && pan){map.setView([p.lat,p.lng],Math.max(map.getZoom(),16));markers.get(id)?.openPopup();}
    if(window.matchMedia('(max-width: 700px)').matches) $('detail-card').scrollIntoView({behavior:'smooth',block:'nearest'});
  }
  function highlightSelection(){document.querySelectorAll('.business-row').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===selectedId)));markers.forEach((m,id)=>{m.setZIndexOffset(id===selectedId?1000:0);m.getElement()?.classList.toggle('selected-marker',id===selectedId);});}
  function render(fit=true){
    const query=normalize($('search').value.trim());
    visiblePlaces=places.filter(p=>(activeCategory==='all'||p.category===activeCategory)&&(!query||normalize(p.name+' '+p.address+' '+(p.aliases||'')).includes(query)));
    if(userPosition)visiblePlaces.sort((a,b)=>distanceKm(userPosition,a)-distanceKm(userPosition,b));
    $('result-count').textContent=`${visiblePlaces.length}곳`;
    $('results-summary').textContent= `${visiblePlaces.length}곳${userPosition?' · 가까운 순 · 직선거리':' · 업체를 선택해 보세요'}`;
    if(selectedId&&!visiblePlaces.some(p=>p.id===selectedId)){selectedId=null;$('detail-card').hidden=true;}
    $('business-list').innerHTML=visiblePlaces.length ? visiblePlaces.map(p=>`<button type="button" class="business-row" data-id="${p.id}" aria-pressed="${p.id===selectedId}"><span class="row-icon" style="--category:${categories[p.category].color}">${icon(p.category)}</span><span class="row-text"><span class="row-name">${escape(p.name)}</span><span class="row-address">${escape(p.address)}</span></span>${userPosition?`<span class="distance">${distanceLabel(p)}</span>`:'<span class="row-arrow" aria-hidden="true">›</span>'}</button>`).join('') : '<div class="empty-results"><strong>검색 결과가 없습니다.</strong><p>다른 이름이나 주소로 검색하거나 전체 업종을 선택해 주세요.</p><button type="button" id="clear-search">검색 초기화</button></div>';
    $('business-list').querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>showDetail(b.dataset.id)));
    $('clear-search')?.addEventListener('click',()=>{$('search').value='';setCategory('all');});
    if(map){markers.forEach(m=>map.removeLayer(m));visiblePlaces.forEach(p=>markers.get(p.id).addTo(map)); if(fit && visiblePlaces.length)map.fitBounds(visiblePlaces.map(p=>[p.lat,p.lng]),{padding:[35,35],maxZoom:16});}
    highlightSelection();
  }
  function setCategory(key){activeCategory=key;document.querySelectorAll('.filter').forEach(b=>{const active=b.dataset.category===key;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});render();}
  $('filters').addEventListener('click',event=>{const b=event.target.closest('[data-category]');if(b)setCategory(b.dataset.category);});
  $('search').addEventListener('input',()=>render());
  $('show-all').addEventListener('click',()=>{$('search').value='';selectedId=null;$('detail-card').hidden=true;setCategory('all');});
  $('nearby').addEventListener('click',()=>{
    if(!navigator.geolocation){$('location-status').textContent='이 브라우저에서는 위치를 확인할 수 없습니다. 업체명 또는 주소로 검색해 주세요.';return;}
    $('nearby').disabled=true;$('location-status').textContent='현재 위치를 확인하고 있습니다…';
    navigator.geolocation.getCurrentPosition(position=>{
      userPosition={lat:position.coords.latitude,lng:position.coords.longitude};$('nearby').disabled=false;$('nearby').textContent='◎ 위치 다시 확인';
      $('location-status').textContent='현재 위치에서 가까운 순으로 정렬했습니다. 거리는 직선거리이며 이동 경로와 다를 수 있습니다.';
      if(map){if(userMarker)map.removeLayer(userMarker);userMarker=L.circleMarker([userPosition.lat,userPosition.lng],{radius:8,color:'#fff',weight:3,fillColor:'#2477cc',fillOpacity:1}).addTo(map).bindTooltip('내 위치');}
      render(false);if(selectedId)showDetail(selectedId,false);
      if(map && visiblePlaces.length){const nearest=visiblePlaces[0];map.setView([nearest.lat,nearest.lng],14);}
    },error=>{$('nearby').disabled=false;$('location-status').textContent=error.code===1?'위치 접근이 허용되지 않았습니다. 브라우저에서 위치 권한을 허용하거나 이름으로 검색해 주세요.':'위치를 확인하지 못했습니다. 다시 시도하거나 이름으로 검색해 주세요.';},{enableHighAccuracy:false,timeout:12000,maximumAge:60000});
  });
  render(false);
  if(window.L){
    $('map-loading').remove();map=L.map('map',{scrollWheelZoom:false}).setView([41.385,2.16],13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    places.forEach(p=>{const c=categories[p.category];const marker=L.marker([p.lat,p.lng],{title:p.name,keyboard:true,icon:L.divIcon({className:'business-marker',html:`<span style="background:${c.color}">${icon(p.category)}</span>`,iconSize:[34,34],iconAnchor:[17,17]})});marker.bindPopup(`<strong>${escape(p.name)}</strong><br>${escape(c.label)}<br>${external(directions(p),'길찾기 ↗')}`);marker.on('click',()=>showDetail(p.id,false));marker.on('popupopen',()=>{if(selectedId!==p.id)showDetail(p.id,false);});markers.set(p.id,marker);});render(false);
  }else{$('map-loading').innerHTML='지도를 불러오지 못했습니다. 업체 목록과 길찾기는 이용할 수 있습니다. <a href="https://www.google.com/maps/d/viewer?mid=11Oh1D7WD_zCbgVHFe19dcBNYHgOxUuM" target="_blank" rel="noopener noreferrer">Google 지도에서 보기 ↗</a>';}
})();
