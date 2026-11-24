/* TEJIDO CAMPESINO – bilingual static site, accessibility-first interactions.
   AI-assisted presentation code. Not the future Android/Meshtastic software. */
(() => {
 "use strict";
 const en = {
  skip:"Skip to content", menu:"Menu", menuAria:"Open or close navigation", navProject:"The project",navHow:"How it works",navResults:"Outcomes",navCommunity:"Community",navPath:"Roadmap",
  heroKicker:"INZÁ · CAUCA / OPEN TECHNOLOGY", heroLine:"Communicating, even when there is no signal.",heroInstitution:"An initiative of Asociación Campesina de Inzá Tierradentro (ACIT), bringing together community organisation, open technology and peasant communication.",heroProblem:"In our rural communities, limited internet access, power outages and a lack of cellular coverage can make it harder to stay in touch. We therefore seek to develop and test a tool for sharing organisational messages and notices from Android phones connected to LoRa radios, without relying on internet or a cellular network to transmit them.",heroPhotoCaption:"High-altitude landscape of the Montaña Caucana",btnProject:"Explore the project",btnHow:"How would it work?",
  problemLabel:"TERRITORY AND COMMUNICATION",problemTitle:"A collective decision also needs to reach people.",problemLead:"Among mountains, roads and rural communities, a notice may depend on finding mobile signal, having electricity or paying for internet. ACIT wants to explore alternatives that strengthen its communications.",problemQuote:"Technology should respond to the needs of the organisation and communities, not the other way around.",environmentLink:"Explore the territory through the environmental map viewer",problemArt:"Community walk in the Montaña Caucana.",problemFact1:"Uneven cellular coverage",problemFact2:"Limited internet and electricity",problemFact3:"Need for timely, verifiable notices",
  howLabel:"HOW WE WANT TO EXPLORE IT",howTitle:"Five steps for a community notice.",howIntro:"A conceptual end-to-end sequence. Coverage and receipt depend on the physical conditions of each test.",conceptCaveat:"Conceptual diagram, not a deployed network.",status1:"Prepared",status2:"Sent",status3:"Technical receipt",status4:"Human acknowledgment",status5:"Not delivered",
  outputsLabel:"RESEARCH AND DEVELOPMENT OUTCOMES",outputsTitle:"Four outcomes. One shared purpose.",outputsIntro:"Open development, reproducible measurements and tools appropriate for community organisations. Each result can be assessed using tangible evidence.",out1title:"Open Android application",out1desc:"A minimal component to create, authorise, route and acknowledge notices with Meshtastic, without recreating existing capabilities.",out1proof:"Planned evidence: prototype, functional tests and code.",out2title:"Autonomous LoRa communications",out2desc:"Tests without internet, with link measurements, relaying and energy autonomy assessments.",out2proof:"Planned evidence: test protocols and recorded measurements.",out3title:"Security and protection",out3desc:"Threat model, classification, access controls, device protection and incident procedures.",out3proof:"Planned evidence: model and synthetic-data tests.",out4title:"Reusable open software",out4desc:"Repository, documentation, specifications and reproducible procedures for other organisations.",out4proof:"Planned evidence: release and replication guide.",
  communityLabel:"COLLECTIVE DEVELOPMENT",communityTitle:"Technology with communities, not only for them.",communityIntro:"Needs and decisions belong to ACIT. Technical coordination, paid internships and specialist review would bring together territorial knowledge and engineering.",communityPhotoCaption:"ACIT community gathering.",collabCenter:"Coordination and community decisions",team1:"Technical coordination",team1d:"Integrates the three internships, quality and technical deliverables.",team2:"Community coordination",team2d:"Organises participatory research, trials and validation.",team3:"Android internship",team3d:"Mobile development, integration and documentation.",team4:"LoRa internship",team4d:"Radios, coverage measurements, power and tests.",team5:"Security internship",team5d:"Threats, safeguards, testing and incident response.",team6:"Mentorship and external review",team6d:"Independent assessment of architecture and critical issues.",communityNote:"Radio Campesina and community members contribute to the design, testing and territorial validation of the proposal.",
  radLabel:"EXISTING ACIT PROCESSES",radTitle:"Community communications already have roots.",radioText:"Radio Campesina is a community communications process within ACIT. TEJIDO CAMPESINO envisages a limited editorial demonstrator for approved public notices, without replacing the radio station's work.",sitcTitle:"Peasant Territorial Information System (SITC)",sitcText:"ACIT's territorial information process and a reference for potential future interoperability. Developing the full SITC is outside this initiative.",
  roadLabel:"RESEARCH JOURNEY",roadTitle:"Eight months. Four milestones.",roadIntro:"A relative roadmap from implementation start, with verifiable technical and community outcomes.",
  securityLabel:"SECURITY AND TERRITORIAL CARE",securityTitle:"A message should not put its sender at risk.",securityIntro:"The design considers information classification, permissions, metadata minimisation, key protection and incident response, with synthetic-data testing.",securityDoc:"Read the security principles",sec1:"Do not send sensitive or critical data over radio without an appropriate channel and procedure.",sec2:"Protect identities, patterns of activity, locations, devices and credentials.",sec3:"Distinguish technical receipt, human acknowledgment and undelivered messages.",sec4:"LoRa does not guarantee anonymity, coverage or a certified emergency service.",
  photosLabel:"TERRITORIAL VISUAL MEMORY",photosTitle:"Landscapes and peasant community initiatives in the Montaña Caucana.",photosIntro:"Images of the territories and peasant community processes of the Montaña Caucana that accompany the story of TEJIDO CAMPESINO.",photoDocs:"Photo credits",
  authLabel:"COMMUNITY AUTHORSHIP AND TRANSPARENCY",authTitle:"An initiative rooted in the territory",authP1:"TEJIDO CAMPESINO grows from the communication needs, experiences and knowledge of ACIT members. Its ideas, objectives and priorities belong to the peasant organisation.",authP2:"During its preparation, artificial intelligence tools helped organise information, explore alternatives and prepare preliminary materials. Their use is documented transparently, recognising that the territorial knowledge and the decisions giving meaning to this project come from the people of ACIT.",authRead:"Transparency about AI use",
  closingOverline:"COMMUNICATION · TERRITORY · COMMUNITY",closingTitle:"A notice that reaches people can sustain a collective decision.",closingText:"We want to explore open technologies that support peasant organisation, strengthen information exchange and help share learning with other communities.",footerRoad:"Roadmap",footerSecurity:"Security",footerPhotos:"Photo credits",footerAi:"AI transparency",footerSourceRepo:"TEJIDO CAMPESINO repository",footerClosing:"Peasant communication · Open technology"
 };
 const esSteps=[
 ["Crear un aviso","Una persona autorizada redacta un aviso comunitario breve desde un celular Android.","Estado: preparado; aún no se ha transmitido."],
 ["Verificar permisos y condiciones","La aplicación comprueba roles, clasificación, destinatarios y condiciones de envío.","La verificación de aplicación es distinta del cifrado del canal de radio."],
 ["Transmitir mediante Android, Bluetooth y LoRa","Android entrega el aviso mediante Bluetooth a un radio compatible; Meshtastic intenta transportarlo por LoRa.","Sin internet comercial, pero con alcance sujeto a medición."],
 ["Recibir en otro dispositivo","Otro radio puede recibir el mensaje si existe una ruta radioeléctrica viable.","Un acuse de paquete no demuestra lectura humana."],
 ["Confirmar el estado","La herramienta diferencia recepción técnica, confirmación de una persona y aviso no entregado.","No se declarará entrega sin evidencia."]];
 const enSteps=[
 ["Create a notice","An authorised person writes a short community notice on an Android phone.","State: prepared; nothing has been transmitted yet."],
 ["Check permissions and conditions","The application checks roles, classification, recipients and sending conditions.","Application verification is distinct from radio-channel encryption."],
 ["Transmit via Android, Bluetooth and LoRa","Android passes the notice via Bluetooth to a compatible radio; Meshtastic attempts transport over LoRa.","No commercial internet, but range must be measured."],
 ["Receive on another device","Another radio may receive the message if a viable radio path exists.","A packet acknowledgment does not prove human reading."],
 ["Confirm the status","The tool distinguishes technical receipt, human acknowledgment and non-delivery.","No delivery will be claimed without evidence."]];
 const esRoad=[
 ["Diseño y preparación","Requisitos comunitarios, arquitectura, seguridad inicial, configuración y primeros ensayos."],
 ["Desarrollo","Aplicación Android mínima, integración Meshtastic, pruebas funcionales y dispositivos."],
 ["Pruebas y validación","Ensayos de comunicación autónoma, mediciones de campo controladas, seguridad y retroalimentación comunitaria."],
 ["Evaluación y publicación","Correcciones, revisión independiente, documentación y publicación abierta reproducible."]];
 const enRoad=[
 ["Design and preparation","Community requirements, architecture, initial security, configuration and early tests."],
 ["Development","Minimal Android application, Meshtastic integration, functional tests and devices."],
 ["Testing and validation","Autonomous communication trials, controlled field measurements, security and community feedback."],
 ["Evaluation and release","Corrections, independent review, documentation and reproducible open publication."]];
 let lang="es",step=0,road=0;
 const translations=[...document.querySelectorAll('[data-t]')].map(el=>({el,key:el.dataset.t,es:el.textContent}));
 const $=id=>document.getElementById(id);
 function renderTexts(){translations.forEach(({el,key,es})=>{el.textContent=lang==='en'?(en[key]??es):es});document.documentElement.lang=lang;
 const labels=lang==='es'?
 {'main-nav':'Navegación principal','step-controls':'Pasos del recorrido','road-track':'Hitos del proyecto','photo-dialog':'Galería fotográfica','photo-close':'Cerrar imagen'}:
 {'main-nav':'Main navigation','step-controls':'Process steps','road-track':'Project milestones','photo-dialog':'Photo gallery','photo-close':'Close image'};
 Object.entries(labels).forEach(([id,value])=>$(id).setAttribute('aria-label',value));
 document.querySelectorAll('img[src="assets/acit-logo.jpg"]').forEach(img=>img.alt=lang==='es'?'Logotipo oficial de ACIT':'Official ACIT logo');
 const heroImg=$('hero-photo');if(heroImg)heroImg.alt=lang==='es'?'Paisaje de páramo con lagunas y frailejones en la Montaña Caucana':'High-altitude landscape with lakes and frailejones in the Montaña Caucana';
 const terrainImg=document.querySelector('.territory-photo img');if(terrainImg)terrainImg.alt=lang==='es'?'Recorrido comunitario por el territorio de la Montaña Caucana':'Community walk through the Montaña Caucana territory';
 const peopleImg=document.querySelector('.community-photo img');if(peopleImg)peopleImg.alt=lang==='es'?'Encuentro comunitario de ACIT':'ACIT community gathering';
 $('photo-prev').setAttribute('aria-label',lang==='es'?'Fotografía anterior':'Previous photograph');
 $('photo-next').setAttribute('aria-label',lang==='es'?'Fotografía siguiente':'Next photograph');
 $('photo-gallery').setAttribute('aria-label',lang==='es'?'Galería fotográfica del territorio':'Territorial photo gallery');
 document.title=lang==='es'?'TEJIDO CAMPESINO · Comunicarnos, incluso cuando no hay señal':'TEJIDO CAMPESINO · Stay in touch without cell signal';$('lang-toggle').innerHTML=lang==='es'?'EN <span aria-hidden="true">↗</span>':'ES <span aria-hidden="true">↗</span>';$('lang-toggle').setAttribute('aria-label',lang==='es'?'Switch to English':'Cambiar a español');$('nav-toggle').setAttribute('aria-label',lang==='es'?'Abrir o cerrar menú':'Open or close navigation');renderSteps();renderRoad();renderGallery();}
 function renderSteps(){const steps=lang==='es'?esSteps:enSteps;const controls=$('step-controls');controls.textContent='';steps.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.className='step-tab';b.setAttribute('aria-pressed',String(i===step));b.textContent=`${String(i+1).padStart(2,'0')} · ${s[0]}`;b.addEventListener('click',()=>{step=i;renderSteps()});controls.append(b)});$('step-count').textContent=`${String(step+1).padStart(2,'0')} / 05`;$('step-title').textContent=steps[step][0];$('step-description').textContent=steps[step][1];$('step-status').textContent=steps[step][2];document.querySelectorAll('[data-step-node]').forEach((n,i)=>n.classList.toggle('active',i===step));$('step-prev').disabled=step===0;$('step-next').disabled=step===steps.length-1;$('step-prev').setAttribute('aria-label',lang==='es'?'Paso anterior':'Previous step');$('step-next').setAttribute('aria-label',lang==='es'?'Paso siguiente':'Next step');}
 function renderRoad(){const steps=lang==='es'?esRoad:enRoad;const controls=$('road-track');controls.textContent='';steps.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.className='road-tab';b.setAttribute('aria-pressed',String(i===road));const small=document.createElement('span');small.textContent=lang==='es'?`MESES ${i*2+1}–${i*2+2}`:`MONTHS ${i*2+1}–${i*2+2}`;const strong=document.createElement('strong');strong.textContent=s[0];b.append(small,strong);b.addEventListener('click',()=>{road=i;renderRoad()});controls.append(b)});$('road-no').textContent=lang==='es'?`HITO 0${road+1} · MESES ${2*road+1}–${2*road+2}`:`MILESTONE 0${road+1} · MONTHS ${2*road+1}–${2*road+2}`;$('road-title').textContent=steps[road][0];$('road-text').textContent=steps[road][1]}
 // Archivo fotográfico: imágenes originales del visor ambiental de la Montaña Caucana.
 // Créditos y procedencia: docs/creditos-fotograficos.md.
 const source='https://raw.githubusercontent.com/avrojasu9/dimension-ambiental-zrc-montana-caucana/main/assets/images/';
 const photos=[
  {file:'04_juntanza_01_recorridos_y_conscientizacion_en_territorios_estrategicos_05.jpg',altEs:'Paisaje de páramo con lagunas y frailejones en la Montaña Caucana',altEn:'High-altitude landscape with lakes and frailejones in the Montaña Caucana',captionEs:'Paisajes del páramo caucano',captionEn:'Landscapes of the Cauca highlands'},
  {file:'01_portada_zrc_montana_caucana.jpg',altEs:'Personas realizando siembra en un páramo',altEn:'People planting in a high-altitude ecosystem',captionEs:'Siembra y cuidado del páramo',captionEn:'Planting and caring for the highlands'},
  {file:'04_juntanza_01_recorridos_y_conscientizacion_en_territorios_estrategicos_01.jpg',altEs:'Recorrido comunitario en la Montaña Caucana',altEn:'Community walk in the Montaña Caucana',captionEs:'Recorrido comunitario en la Montaña Caucana',captionEn:'Community walk in the Montaña Caucana'},
  {file:'05_agroalimentarias_semillas_cafe_tradicional.jpg',altEs:'Semillas de café tradicional en el territorio campesino',altEn:'Traditional coffee seeds from the peasant territory',captionEs:'Semillas y saberes campesinos',captionEn:'Seeds and peasant knowledge'},
  {file:'05_agroalimentarias_cultivo_tomate_el_descanso.jpg',altEs:'Cultivo de tomate en El Descanso',altEn:'Tomato cultivation in El Descanso',captionEs:'Producción campesina en El Descanso',captionEn:'Peasant farming in El Descanso'},
  {file:'04_juntanza_03_restauracion_nacimiento_de_agua_guanacas_01.jpg',altEs:'Restauración de un nacimiento de agua en Guanacas',altEn:'Restoration of a water spring in Guanacas',captionEs:'Cuidado comunitario del agua',captionEn:'Community care for water'},
  {file:'07_acit_cierre.jpg',altEs:'Encuentro comunitario de ACIT',altEn:'ACIT community gathering',captionEs:'Encuentro comunitario de ACIT',captionEn:'ACIT community gathering'}
 ];
 let activePhoto=0;
 const photoSrc=(photo)=>source+photo.file;
 function showPhoto(index){
  activePhoto=(index+photos.length)%photos.length;
  const photo=photos[activePhoto];
  $('photo-dialog-image').src=photoSrc(photo);
  $('photo-dialog-image').alt=lang==='es'?photo.altEs:photo.altEn;
  $('photo-dialog-caption').textContent=lang==='es'?photo.captionEs:photo.captionEn;
  $('photo-counter').textContent=`${activePhoto+1} / ${photos.length}`;
 }
 function openPhoto(index){showPhoto(index);$('photo-dialog').showModal();}
 function renderGallery(){
  const host=$('photo-gallery');host.textContent='';
  photos.forEach((photo,i)=>{
   const button=document.createElement('button');button.type='button';button.className='photo-real';
   const img=document.createElement('img');img.src=photoSrc(photo);img.alt=lang==='es'?photo.altEs:photo.altEn;
   img.loading='lazy';img.decoding='async';img.width=720;img.height=530;
   const caption=document.createElement('span');caption.textContent=lang==='es'?photo.captionEs:photo.captionEn;
   button.append(img,caption);
   button.setAttribute('aria-label',(lang==='es'?'Ampliar fotografía: ':'Open photo: ')+caption.textContent);
   button.addEventListener('click',()=>openPhoto(i));host.append(button);
  });
  if($('photo-dialog').open)showPhoto(activePhoto);
 }
 $('photo-prev').addEventListener('click',()=>showPhoto(activePhoto-1));
 $('photo-next').addEventListener('click',()=>showPhoto(activePhoto+1));
 $('photo-dialog').addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(activePhoto-1)}
  if(event.key==='ArrowRight'){event.preventDefault();showPhoto(activePhoto+1)}
 });
 $('step-prev').addEventListener('click',()=>{if(step>0){step--;renderSteps()}});$('step-next').addEventListener('click',()=>{if(step<4){step++;renderSteps()}});$('lang-toggle').addEventListener('click',()=>{lang=lang==='es'?'en':'es';renderTexts()});$('nav-toggle').addEventListener('click',()=>{const nav=$('main-nav');const expanded=nav.classList.toggle('open');$('nav-toggle').setAttribute('aria-expanded',String(expanded))});document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',()=>{$('main-nav').classList.remove('open');$('nav-toggle').setAttribute('aria-expanded','false')}));$('photo-close').addEventListener('click',()=>$('photo-dialog').close());$('photo-dialog').addEventListener('click',e=>{if(e.target===$('photo-dialog'))$('photo-dialog').close()});renderTexts();
})();