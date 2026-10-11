'use strict';
(() => {
  const phrases = [
    ["제작자 후원","Apoya al creador","Dona suport al creador","Support the creator"],
    ["ERC-20 토큰 주소","Dirección de tokens ERC-20","Adreça de tokens ERC-20","ERC-20 token address"],
    ["ERC-20 지갑 주소 QR 코드","Código QR de la dirección ERC-20","Codi QR de l’adreça ERC-20","ERC-20 wallet address QR code"],
    ["QR 코드를 스캔해 주소를 확인하세요.","Escanea el QR para ver la dirección.","Escaneja el QR per veure l’adreça.","Scan the QR code to view the address."],
  [
    "카탈루냐 한인회",
    "Asociación Coreana de Cataluña",
    "Associació Coreana de Catalunya",
    "Korean Association of Catalonia"
  ],
  [
    "바르셀로나의 한인 비즈니스를 연결합니다",
    "Conectamos los negocios coreanos de Barcelona",
    "Connectem els negocis coreans de Barcelona",
    "Connecting Korean businesses in Barcelona"
  ],
  [
    "BARCELONA · KOREAN COMMUNITY",
    "BARCELONA · COMUNIDAD COREANA",
    "BARCELONA · COMUNITAT COREANA",
    "BARCELONA · KOREAN COMMUNITY"
  ],
  [
    "바르셀로나에서 만나는",
    "Descubre Barcelona:",
    "Descobreix Barcelona:",
    "Discover Barcelona:"
  ],
  [
    "우리의 가게, 우리의 이웃.",
    "nuestros negocios, nuestra comunidad.",
    "els nostres negocis, la nostra comunitat.",
    "our businesses, our community."
  ],
  [
    "에서 제공합니다.",
    " presenta esta guía.",
    " presenta aquesta guia.",
    " provides this guide."
  ],
  [
    "한식당부터 생활에 필요한 곳까지.",
    "Restaurantes coreanos y servicios para tu día a día.",
    "Restaurants coreans i serveis per al teu dia a dia.",
    "Korean restaurants and everyday services."
  ],
  [
    "바르셀로나와 근교의 한인 비즈니스 65곳을 한눈에 살펴보세요.",
    "Explora 65 negocios coreanos en Barcelona y sus alrededores.",
    "Explora 65 negocis coreans a Barcelona i als voltants.",
    "Explore 65 Korean businesses in Barcelona and nearby towns."
  ],
  [
    "Google 지도에서 열기 ↗",
    "Abrir en Google Maps ↗",
    "Obre a Google Maps ↗",
    "Open in Google Maps ↗"
  ],
  [
    "PDF 지도 다운로드",
    "Descargar mapa PDF",
    "Descarrega el mapa PDF",
    "Download PDF map"
  ],
  [
    "한인 비즈니스 지도",
    "Mapa de negocios coreanos",
    "Mapa de negocis coreans",
    "Korean business map"
  ],
  [
    "전체 지도 보기",
    "Ver todo el mapa",
    "Mostra tot el mapa",
    "Show all businesses"
  ],
  [
    "업체명 또는 주소 검색",
    "Buscar por nombre o dirección",
    "Cerca per nom o adreça",
    "Search by name or address"
  ],
  [
    "◎ 내 주변 업체",
    "◎ Negocios cercanos",
    "◎ Negocis propers",
    "◎ Businesses near me"
  ],
  [
    "◎ 위치 다시 확인",
    "◎ Actualizar ubicación",
    "◎ Actualitza la ubicació",
    "◎ Refresh location"
  ],
  [
    "전체",
    "Todos",
    "Tots",
    "All"
  ],
  [
    "식당",
    "Restaurantes",
    "Restaurants",
    "Restaurants"
  ],
  [
    "카페·베이커리",
    "Cafés y panaderías",
    "Cafès i fleques",
    "Cafés & bakeries"
  ],
  [
    "식품",
    "Alimentación",
    "Alimentació",
    "Groceries"
  ],
  [
    "쇼핑",
    "Compras",
    "Compres",
    "Shopping"
  ],
  [
    "뷰티",
    "Belleza",
    "Bellesa",
    "Beauty"
  ],
  [
    "의료",
    "Salud",
    "Salut",
    "Health"
  ],
  [
    "태권도·스포츠",
    "Taekwondo y deporte",
    "Taekwondo i esport",
    "Taekwondo & sports"
  ],
  [
    "교육·문화",
    "Educación y cultura",
    "Educació i cultura",
    "Education & culture"
  ],
  [
    "여행",
    "Viajes",
    "Viatges",
    "Travel"
  ],
  [
    "기관·기타",
    "Instituciones y otros",
    "Institucions i altres",
    "Institutions & other"
  ],
  [
    "내 주변을 누르면 위치를 확인하고 직선거리 기준으로 정렬합니다.",
    "Pulsa «Negocios cercanos» para ordenar por distancia en línea recta.",
    "Prem «Negocis propers» per ordenar per distància en línia recta.",
    "Select “Businesses near me” to sort by straight-line distance."
  ],
  [
    "검색 결과가 없습니다.",
    "No hay resultados.",
    "No hi ha resultats.",
    "No results found."
  ],
  [
    "다른 이름이나 주소로 검색하거나 전체 업종을 선택해 주세요.",
    "Prueba otro nombre o dirección, o selecciona todas las categorías.",
    "Prova un altre nom o adreça, o selecciona totes les categories.",
    "Try another name or address, or select all categories."
  ],
  [
    "검색 초기화",
    "Borrar búsqueda",
    "Esborra la cerca",
    "Clear search"
  ],
  [
    "길찾기 ↗",
    "Cómo llegar ↗",
    "Com arribar-hi ↗",
    "Directions ↗"
  ],
  [
    "사진·리뷰 ↗",
    "Fotos y reseñas ↗",
    "Fotos i ressenyes ↗",
    "Photos & reviews ↗"
  ],
  [
    "웹사이트 ↗",
    "Sitio web ↗",
    "Lloc web ↗",
    "Website ↗"
  ],
  [
    "카카오톡 ID:",
    "ID de KakaoTalk:",
    "ID de KakaoTalk:",
    "KakaoTalk ID:"
  ],
  [
    "카카오톡 친구 추가 → ID로 추가에서 검색해 주세요.",
    "En KakaoTalk, ve a Añadir amigos → Añadir por ID y busca este ID.",
    "A KakaoTalk, ves a Afegir amics → Afegir per ID i cerca aquest ID.",
    "In KakaoTalk, go to Add friends → Add by ID and search for this ID."
  ],
  [
    "첨부 지도에 기재된 주소 기준입니다. 방문 전 전화로 위치를 확인해 주세요.",
    "Dirección indicada en el PDF. Confirma la ubicación por teléfono antes de ir.",
    "Adreça indicada al PDF. Confirma la ubicació per telèfon abans d’anar-hi.",
    "Address listed in the PDF. Confirm the location by phone before visiting."
  ],
  [
    "GROW TOGETHER",
    "CRECEMOS JUNTOS",
    "CREIXEM JUNTS",
    "GROW TOGETHER"
  ],
  [
    "빠진 업체가 있나요?",
    "¿Falta algún negocio?",
    "Hi falta algun negoci?",
    "Is a business missing?"
  ],
  [
    "카카오톡",
    "KakaoTalk",
    "KakaoTalk",
    "KakaoTalk"
  ],
  [
    "으로 업체명과 주소 또는 Google 지도 링크를 보내주세요.",
    " recibe tus sugerencias: envía el nombre y la dirección o un enlace de Google Maps.",
    " rep els teus suggeriments: envia el nom i l’adreça o un enllaç de Google Maps.",
    " welcomes your suggestions: send the business name and address or a Google Maps link."
  ],
  [
    "친구 추가 → ID로 추가에서",
    "En Añadir amigos → Añadir por ID, busca",
    "A Afegir amics → Afegir per ID, cerca",
    "Under Add friends → Add by ID, search for"
  ],
  [
    "을 검색한 뒤 메시지를 보내실 수 있습니다.",
    " y envía un mensaje.",
    " i envia un missatge.",
    " and send a message."
  ],
  [
    "카카오톡 ID 복사 · Koreanbcn",
    "Copiar ID de KakaoTalk · Koreanbcn",
    "Copia l’ID de KakaoTalk · Koreanbcn",
    "Copy KakaoTalk ID · Koreanbcn"
  ],
  [
    "ID를 복사했습니다. 카카오톡에서 친구로 추가해 주세요.",
    "ID copiado. Añádelo como amigo en KakaoTalk.",
    "ID copiat. Afegeix-lo com a amic a KakaoTalk.",
    "ID copied. Add it as a friend in KakaoTalk."
  ],
  [
    "카카오톡에서 Koreanbcn을 검색해 주세요.",
    "Busca Koreanbcn en KakaoTalk.",
    "Cerca Koreanbcn a KakaoTalk.",
    "Search for Koreanbcn in KakaoTalk."
  ],
  [
    "영업시간과 운영 여부는 방문 전 업체에 확인해 주세요.",
    "Confirma los horarios y la apertura antes de visitar el negocio.",
    "Confirma els horaris i l’obertura abans de visitar el negoci.",
    "Confirm opening hours and availability before visiting."
  ],
  [
    "업체 정보:",
    "Información de negocios:",
    "Informació dels negocis:",
    "Business information:"
  ],
  [
    "· Google My Maps / 지도: OpenStreetMap",
    "· Google My Maps / Mapa: OpenStreetMap",
    "· Google My Maps / Mapa: OpenStreetMap",
    "· Google My Maps / Map: OpenStreetMap"
  ],
  [
    "SUPPORT THE CREATOR",
    "APOYA AL CREADOR",
    "DONA SUPORT AL CREADOR",
    "SUPPORT THE CREATOR"
  ],
  [
    "제작자 후원 · ETH 지갑",
    "Apoya al creador · Cartera ETH",
    "Dona suport al creador · Moneder ETH",
    "Support the creator · ETH wallet"
  ],
  [
    "Ethereum Mainnet",
    "Red principal de Ethereum",
    "Xarxa principal d’Ethereum",
    "Ethereum Mainnet"
  ],
  [
    "이 지도를 만드는 데 힘을 보태 주세요.",
    "Ayuda a mantener y mejorar este mapa.",
    "Ajuda a mantenir i millorar aquest mapa.",
    "Help maintain and improve this map."
  ],
  [
    "ETH 지갑 주소",
    "Dirección de la cartera ETH",
    "Adreça del moneder ETH",
    "ETH wallet address"
  ],
  [
    "주소 복사",
    "Copiar dirección",
    "Copia l’adreça",
    "Copy address"
  ],
  [
    "후원 주소를 복사했습니다.",
    "Dirección copiada.",
    "Adreça copiada.",
    "Address copied."
  ],
  [
    "주소를 선택해서 복사해 주세요.",
    "Selecciona la dirección y cópiala.",
    "Selecciona l’adreça i copia-la.",
    "Select the address and copy it."
  ],
  [
    "같은 주소로 받을 수 있는 자산",
    "Activos que puedes recibir en esta dirección",
    "Actius que pots rebre en aquesta adreça",
    "Assets this address can receive"
  ],
  [
    "Ethereum 메인넷 기준",
    "En la red principal de Ethereum",
    "A la xarxa principal d’Ethereum",
    "On Ethereum Mainnet"
  ],
  [
    "더 많은 ERC-20 토큰 보기",
    "Ver más tokens ERC-20",
    "Mostra més tokens ERC-20",
    "Show more ERC-20 tokens"
  ],
  [
    "위 목록은 대표 예시입니다. Ethereum 메인넷의 다른 ERC-20 토큰도 동일한 주소를 사용합니다.",
    "Son ejemplos. Otros tokens ERC-20 de la red principal de Ethereum utilizan la misma dirección.",
    "Són exemples. Altres tokens ERC-20 de la xarxa principal d’Ethereum utilitzen la mateixa adreça.",
    "These are examples. Other Ethereum Mainnet ERC-20 tokens use the same address."
  ],
  [
    "송금할 때 네트워크를",
    "Al enviar, selecciona la red",
    "En enviar, selecciona la xarxa",
    "When sending, select the"
  ],
  [
    "으로 선택해 주세요. 다른 네트워크의 지원 여부는 별도 확인이 필요합니다.",
    ". Comprueba por separado la compatibilidad con otras redes.",
    ". Comprova per separat la compatibilitat amb altres xarxes.",
    " network. Support for other networks must be checked separately."
  ],
  [
    "Etherscan에서 주소 확인 ↗",
    "Ver dirección en Etherscan ↗",
    "Consulta l’adreça a Etherscan ↗",
    "View address on Etherscan ↗"
  ],
  [
    "지도를 불러오는 중입니다.",
    "Cargando el mapa…",
    "S’està carregant el mapa…",
    "Loading the map…"
  ],
  [
    "지도를 불러오지 못했습니다. 업체 목록과 길찾기는 이용할 수 있습니다.",
    "No se ha podido cargar el mapa. La lista y las indicaciones siguen disponibles.",
    "No s’ha pogut carregar el mapa. La llista i les indicacions continuen disponibles.",
    "The map could not load. Business listings and directions are still available."
  ],
  [
    "Google 지도에서 보기 ↗",
    "Ver en Google Maps ↗",
    "Mostra a Google Maps ↗",
    "View in Google Maps ↗"
  ],
  [
    "이 브라우저에서는 위치를 확인할 수 없습니다. 업체명 또는 주소로 검색해 주세요.",
    "Este navegador no permite localizarte. Busca por nombre o dirección.",
    "Aquest navegador no permet localitzar-te. Cerca per nom o adreça.",
    "Location is unavailable in this browser. Search by name or address."
  ],
  [
    "현재 위치를 확인하고 있습니다…",
    "Buscando tu ubicación…",
    "S’està cercant la teva ubicació…",
    "Finding your location…"
  ],
  [
    "현재 위치에서 가까운 순으로 정렬했습니다. 거리는 직선거리이며 이동 경로와 다를 수 있습니다.",
    "Ordenado por proximidad. La distancia es en línea recta y puede diferir del trayecto.",
    "Ordenat per proximitat. La distància és en línia recta i pot diferir del trajecte.",
    "Sorted by proximity. Straight-line distances may differ from the travel route."
  ],
  [
    "위치 접근이 허용되지 않았습니다. 브라우저에서 위치 권한을 허용하거나 이름으로 검색해 주세요.",
    "Acceso a la ubicación denegado. Actívalo en el navegador o busca por nombre.",
    "Accés a la ubicació denegat. Activa’l al navegador o cerca per nom.",
    "Location access was denied. Allow it in your browser or search by name."
  ],
  [
    "위치를 확인하지 못했습니다. 다시 시도하거나 이름으로 검색해 주세요.",
    "No se ha podido localizarte. Inténtalo de nuevo o busca por nombre.",
    "No s’ha pogut localitzar-te. Torna-ho a provar o cerca per nom.",
    "Unable to find your location. Try again or search by name."
  ],
  [
    "내 위치",
    "Mi ubicación",
    "La meva ubicació",
    "My location"
  ],
  [
    "대한민국 태극기",
    "Bandera de Corea del Sur",
    "Bandera de Corea del Sud",
    "Flag of South Korea"
  ],
  [
    "업종 필터",
    "Filtrar por categoría",
    "Filtra per categoria",
    "Filter by category"
  ],
  [
    "업체 상세 닫기",
    "Cerrar detalles",
    "Tanca els detalls",
    "Close business details"
  ],
  [
    "선택한 업체 상세 정보",
    "Detalles del negocio seleccionado",
    "Detalls del negoci seleccionat",
    "Selected business details"
  ],
  [
    "업체 목록과 상세 정보",
    "Lista de negocios y detalles",
    "Llista de negocis i detalls",
    "Business listings and details"
  ],
  [
    "업체 위치 지도",
    "Mapa de ubicaciones",
    "Mapa d’ubicacions",
    "Business location map"
  ],
  [
    "바르셀로나 한인 업체 지도",
    "Mapa de negocios coreanos de Barcelona",
    "Mapa de negocis coreans de Barcelona",
    "Barcelona Korean business map"
  ],
  [
    "바르셀로나 한인 비즈니스 지도",
    "Mapa de negocios coreanos de Barcelona",
    "Mapa de negocis coreans de Barcelona",
    "Barcelona Korean business map"
  ],
  [
    "바르셀로나 한인 업체 지도 2026 PDF 다운로드",
    "Descargar mapa de negocios coreanos 2026 en PDF",
    "Descarrega el mapa de negocis coreans 2026 en PDF",
    "Download the 2026 Korean business map PDF"
  ],
  [
    "Zoom in",
    "Acercar",
    "Apropa",
    "Zoom in"
  ],
  [
    "Zoom out",
    "Alejar",
    "Allunya",
    "Zoom out"
  ],
  [
    "Close popup",
    "Cerrar ventana",
    "Tanca la finestra",
    "Close popup"
  ]
];

  const languages = {ko:0, es:1, ca:2, en:3};
  const dictionary = new Map(phrases.map(row => [row[0], row]));
  const texts = new WeakMap();
  const attributes = new WeakMap();
  const trackedAttributes = ['placeholder', 'aria-label', 'title', 'alt'];
  let language = 'ko';
  try { const saved = localStorage.getItem('bcn-map-language'); if(saved in languages) language=saved; } catch {}
  function translate(value) {
    if(language === 'ko') return value;
    const trimmed = value.trim();
    const row = dictionary.get(trimmed);
    let translated = row ? row[languages[language]] : null;
    const count = trimmed.match(/^(\d+)곳(.*)$/);
    if(count) {
      const nouns={es:'negocios',ca:'negocis',en:'businesses'};
      const singular={es:'negocio',ca:'negoci',en:'business'};
      translated=count[1]+' '+(count[1]==='1'?singular[language]:nouns[language]);
      if(count[2].includes('업체를 선택해 보세요')) translated += {es:' · Selecciona un negocio',ca:' · Selecciona un negoci',en:' · Select a business'}[language];
      else if(count[2].includes('가까운 순')) translated += {es:' · Por proximidad · Distancia en línea recta',ca:' · Per proximitat · Distància en línia recta',en:' · Nearest first · Straight-line distance'}[language];
    }
    const phone = trimmed.match(/^전화 (.+)$/);
    if(phone) translated={es:'Teléfono: ',ca:'Telèfon: ',en:'Phone: '}[language]+phone[1];
    const distance = trimmed.match(/^(.*?)\s*· 직선거리 (.+)$/);
    if(distance) {
      const category=dictionary.get(distance[1]);
      translated=(category?category[languages[language]]:distance[1])+{es:' · Distancia en línea recta: ',ca:' · Distància en línia recta: ',en:' · Straight-line distance: '}[language]+distance[2];
    }
    if(translated === null) return value;
    return value.slice(0,value.indexOf(trimmed))+translated+value.slice(value.indexOf(trimmed)+trimmed.length);
  }
  function skip(element) {
    return !element || !!element.closest('script, style, noscript, svg, .language-switcher, [data-no-translate]');
  }
  function translateText(node) {
    if(skip(node.parentElement)) return;
    let entry=texts.get(node);
    if(!entry || node.nodeValue !== entry.output) entry={source:node.nodeValue, output:node.nodeValue};
    const next=translate(entry.source);
    entry.output=next;
    texts.set(node,entry);
    if(node.nodeValue !== next) node.nodeValue=next;
  }
  function translateAttributes(element) {
    if(skip(element)) return;
    let entries=attributes.get(element);
    if(!entries) {entries={};attributes.set(element,entries);}
    trackedAttributes.forEach(name=>{
      if(!element.hasAttribute(name)) return;
      const value=element.getAttribute(name);
      let entry=entries[name];
      if(!entry || value !== entry.output) entry={source:value,output:value};
      const next=translate(entry.source);
      entry.output=next; entries[name]=entry;
      if(value !== next) element.setAttribute(name,next);
    });
  }
  function visit(root) {
    if(root.nodeType === Node.TEXT_NODE) {translateText(root);return;}
    if(root.nodeType !== Node.ELEMENT_NODE || skip(root)) return;
    translateAttributes(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
    while(walker.nextNode()) {
      const node=walker.currentNode;
      if(node.nodeType === Node.TEXT_NODE) translateText(node);
      else translateAttributes(node);
    }
  }
  function applyLanguage() {
    document.documentElement.lang=language;
    document.title=translate('바르셀로나 한인 비즈니스 지도');
    const names={ko:'언어 선택',es:'Seleccionar idioma',ca:'Tria l’idioma',en:'Choose language'};
    document.querySelector('.language-switcher').setAttribute('aria-label',names[language]);
    document.querySelectorAll('[data-language]').forEach(button=>{
      const active=button.dataset.language===language;
      button.setAttribute('aria-pressed',String(active));
      button.classList.toggle('active',active);
    });
    visit(document.body);
  }
  const observer=new MutationObserver(records=>{
    records.forEach(record=>{
      if(record.type==='characterData') translateText(record.target);
      else if(record.type==='attributes') translateAttributes(record.target);
      else record.addedNodes.forEach(visit);
    });
  });
  document.querySelector('.language-switcher').addEventListener('click',event=>{
    const button=event.target.closest('[data-language]');
    if(!button || button.dataset.language===language) return;
    language=button.dataset.language;
    try {localStorage.setItem('bcn-map-language',language);} catch {}
    applyLanguage();
  });
  applyLanguage();
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:trackedAttributes});
})();
