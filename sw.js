/* Service Worker Bilder-App – Fassung bilder-664311b900e8 */
const FASSUNG = 'bilder-664311b900e8';
const DATEIEN = [["./", "b8b6e183b7a6d845"], ["index.html", "b8b6e183b7a6d845"], ["3d.html", "9c89d25ec7f472e3"], ["bilder/gross/Materialcollage_Wohn-Esszimmer.jpg", "2f978e1153187a0e"], ["bilder/gross/Modellfoto_A_000_vorn.jpg", "a5c918403c94ae25"], ["bilder/gross/Modellfoto_A_045.jpg", "db4ebac169408826"], ["bilder/gross/Modellfoto_A_090_seite.jpg", "a318b75f97c88c1f"], ["bilder/gross/Modellfoto_A_135.jpg", "af3b6eb716523f25"], ["bilder/gross/Modellfoto_A_180_hinten.jpg", "b0eef6b95777cd1f"], ["bilder/gross/Modellfoto_A_225.jpg", "69557e5a443c093c"], ["bilder/gross/Modellfoto_A_270_seite.jpg", "606b49f50c53276a"], ["bilder/gross/Modellfoto_A_315.jpg", "3fc75070a474ca23"], ["bilder/gross/Modellfoto_B_000_vorn.jpg", "acce36d71f507085"], ["bilder/gross/Modellfoto_B_045_rechts.jpg", "8329bfafe277e023"], ["bilder/gross/Modellfoto_B_315_links.jpg", "d521193518262920"], ["bilder/gross/Modellfoto_C1_000_vorn.jpg", "42f7dffb3d698b3f"], ["bilder/gross/Modellfoto_C1_045_rechts.jpg", "422e411983edbdc9"], ["bilder/gross/Modellfoto_C1_315_links.jpg", "6bb5666a94f03fc7"], ["bilder/gross/Modellfoto_C2_000_vorn.jpg", "5e89ae9d859f2d4f"], ["bilder/gross/Modellfoto_C2_045_rechts.jpg", "8e6b95cc5a4d4959"], ["bilder/gross/Modellfoto_C2_315_links.jpg", "7e401fc86f1932ec"], ["bilder/gross/Moodboard_Wohn-Esszimmer.jpg", "3eb76cc31eb37e16"], ["bilder/gross/Plan_1_Moeblierung_Leistungen.jpg", "840a5b589de9d893"], ["bilder/gross/Plan_2_Zonen_Wege_Blicke.jpg", "ee2fe449b9e46e53"], ["bilder/gross/Plan_3_Licht_Elektro.jpg", "4067cf47d9587c77"], ["bilder/gross/Plan_4_Wandabwicklung.jpg", "80f376ec8e637e87"], ["bilder/gross/Plan_5_Aufmass_Massketten.jpg", "cda0292ddc632d62"], ["bilder/gross/Raum_01_Abend.jpg", "9b1b3f9f349a834c"], ["bilder/gross/Raum_01_Tag.jpg", "ea06904a3cb9e0aa"], ["bilder/gross/Raum_02_Abend.jpg", "43a46a8f71751b74"], ["bilder/gross/Raum_02_Tag.jpg", "bea90093dd22196f"], ["bilder/gross/Raum_04_Abend.jpg", "9c62867151c83cec"], ["bilder/gross/Raum_04_Tag.jpg", "111eb71c62b9c8d0"], ["bilder/gross/Raum_05_Abend.jpg", "a6e4e8991fb8fb18"], ["bilder/gross/Raum_05_Tag.jpg", "b55ee0533fe314b0"], ["bilder/gross/Raum_10_Abend.jpg", "7b5309f4c8c8efd5"], ["bilder/gross/Raum_10_Tag.jpg", "025aeb4282395dca"], ["bilder/gross/Raum_11_Abend.jpg", "d57535cd9d37f253"], ["bilder/gross/Raum_11_Tag.jpg", "a06ad2678c116035"], ["bilder/gross/Raum_12_Abend.jpg", "c0bcf6ae3cedfa7b"], ["bilder/gross/Raum_12_Tag.jpg", "c75b5c751b828464"], ["bilder/gross/Raum_13_Abend.jpg", "4721a351fed381c1"], ["bilder/gross/Raum_13_Tag.jpg", "654808f6e1738b89"], ["bilder/gross/Raum_14_Abend.jpg", "f6d3f438850e5c07"], ["bilder/gross/Raum_14_Tag.jpg", "7181e72c2cbbed64"], ["bilder/gross/Raum_15_Abend.jpg", "0a9517d09e126b22"], ["bilder/gross/Raum_15_Tag.jpg", "b882f3acbce35a0d"], ["bilder/gross/Raum_16_Abend.jpg", "d326810523b53c5a"], ["bilder/gross/Raum_16_Tag.jpg", "006824fa21c01bcf"], ["bilder/gross/Raum_18_Abend.jpg", "17c247e77c229077"], ["bilder/gross/Raum_18_Tag.jpg", "169859afa398fd32"], ["bilder/gross/Raum_19_Abend.jpg", "4f86dd20b7fa8b46"], ["bilder/gross/Raum_19_Tag.jpg", "a2ca252aae337427"], ["bilder/klein/Materialcollage_Wohn-Esszimmer.jpg", "3dc989b56b4ebcde"], ["bilder/klein/Meisterstueck_Rundgang_offen_Licht.jpg", "6853520a31ec192e"], ["bilder/klein/Meisterstueck_Rundgang_zu_Licht.jpg", "e81bc0bd742a08a7"], ["bilder/klein/Modellfoto_A_000_vorn.jpg", "c060c69c8bff728a"], ["bilder/klein/Modellfoto_A_045.jpg", "f6225e9915991b2d"], ["bilder/klein/Modellfoto_A_090_seite.jpg", "d4d66db448140e49"], ["bilder/klein/Modellfoto_A_135.jpg", "8a7b0bb56b988659"], ["bilder/klein/Modellfoto_A_180_hinten.jpg", "40f6a2bfbcbd2a4d"], ["bilder/klein/Modellfoto_A_225.jpg", "541b14901b4cb96c"], ["bilder/klein/Modellfoto_A_270_seite.jpg", "24f533c4969aacd0"], ["bilder/klein/Modellfoto_A_315.jpg", "df56acaad2d72fdf"], ["bilder/klein/Modellfoto_B_000_vorn.jpg", "507df4f23234f2b6"], ["bilder/klein/Modellfoto_B_045_rechts.jpg", "2bc5f882db868152"], ["bilder/klein/Modellfoto_B_315_links.jpg", "f1b3c10cc7a87031"], ["bilder/klein/Modellfoto_C1_000_vorn.jpg", "20b071f04f528b79"], ["bilder/klein/Modellfoto_C1_045_rechts.jpg", "d5a2d1cce065efa7"], ["bilder/klein/Modellfoto_C1_315_links.jpg", "8166feff224b0007"], ["bilder/klein/Modellfoto_C2_000_vorn.jpg", "27c267dcd8fd6a67"], ["bilder/klein/Modellfoto_C2_045_rechts.jpg", "25c32cb53b40ca3f"], ["bilder/klein/Modellfoto_C2_315_links.jpg", "6573cc4e59f2a4de"], ["bilder/klein/Moodboard_Wohn-Esszimmer.jpg", "96304a4a3b201f25"], ["bilder/klein/Plan_1_Moeblierung_Leistungen.jpg", "b1f56d1700dfc883"], ["bilder/klein/Plan_2_Zonen_Wege_Blicke.jpg", "f92d6b381fdaddae"], ["bilder/klein/Plan_3_Licht_Elektro.jpg", "66c8be5bc391ec49"], ["bilder/klein/Plan_4_Wandabwicklung.jpg", "e56b10bf2139c000"], ["bilder/klein/Plan_5_Aufmass_Massketten.jpg", "8aa3146c1e27a146"], ["bilder/klein/Raum_01_Abend.jpg", "833770c0f72346e4"], ["bilder/klein/Raum_01_Tag.jpg", "291fb6bf30a831c3"], ["bilder/klein/Raum_02_Abend.jpg", "e183939461916436"], ["bilder/klein/Raum_02_Tag.jpg", "f6395e6443349a3c"], ["bilder/klein/Raum_04_Abend.jpg", "ec689feea2590de8"], ["bilder/klein/Raum_04_Tag.jpg", "e07034c623d03678"], ["bilder/klein/Raum_05_Abend.jpg", "8282d3cc0978fc21"], ["bilder/klein/Raum_05_Tag.jpg", "b9fbb8a3d30388f9"], ["bilder/klein/Raum_10_Abend.jpg", "55a6fd97e2e2e613"], ["bilder/klein/Raum_10_Tag.jpg", "795be0dbe99fed18"], ["bilder/klein/Raum_11_Abend.jpg", "4e0112f5debd405d"], ["bilder/klein/Raum_11_Tag.jpg", "7bd61d6c0b0ec2e3"], ["bilder/klein/Raum_12_Abend.jpg", "a50868f9f185f800"], ["bilder/klein/Raum_12_Tag.jpg", "2588debe430498dd"], ["bilder/klein/Raum_13_Abend.jpg", "1f3b9ff9ede1dc0f"], ["bilder/klein/Raum_13_Tag.jpg", "a061e675dad4b68a"], ["bilder/klein/Raum_14_Abend.jpg", "96ec2aea8bbf2ebd"], ["bilder/klein/Raum_14_Tag.jpg", "d2450e4d4c3ccc26"], ["bilder/klein/Raum_15_Abend.jpg", "526d8050ec8a8beb"], ["bilder/klein/Raum_15_Tag.jpg", "72658792f2dbf57b"], ["bilder/klein/Raum_16_Abend.jpg", "d538420d0ba58bfd"], ["bilder/klein/Raum_16_Tag.jpg", "795638786895cc5d"], ["bilder/klein/Raum_18_Abend.jpg", "533700c518a8e042"], ["bilder/klein/Raum_18_Tag.jpg", "cf82baf23a8aace7"], ["bilder/klein/Raum_19_Abend.jpg", "8fa05321733d4d3f"], ["bilder/klein/Raum_19_Tag.jpg", "7344073053e0f631"], ["bilder/klein/vorschau_3d.jpg", "a34c2efd5881d35a"], ["filme/Meisterstueck_Rundgang_offen_Licht.mp4", "874647e175d5d38b"], ["filme/Meisterstueck_Rundgang_zu_Licht.mp4", "4d46c0d2a4030824"], ["icons/icon-180.png", "697c138d9179b151"], ["icons/icon-192.png", "de86f0c87f520ab6"], ["icons/icon-512.png", "eb2d06e1fa7aed01"], ["manifest.webmanifest", "b3177c6f0dfbcfa7"], ["three/build/three.module.js", "ce1fa418de16a194"], ["three/examples/jsm/controls/OrbitControls.js", "80efaadea4f8a636"], ["three/examples/jsm/loaders/DRACOLoader.js", "8a90b39b6c0d7faa"], ["three/examples/jsm/loaders/GLTFLoader.js", "45139faddd5aaf48"], ["three/examples/jsm/math/SimplexNoise.js", "9b8d541b77b0ddc7"], ["three/examples/jsm/postprocessing/EffectComposer.js", "d234e578618fa816"], ["three/examples/jsm/postprocessing/GTAOPass.js", "980b036767c439cf"], ["three/examples/jsm/postprocessing/MaskPass.js", "328cf7db0da5d9be"], ["three/examples/jsm/postprocessing/OutputPass.js", "32f879d217908767"], ["three/examples/jsm/postprocessing/Pass.js", "b3c6128340eaa37e"], ["three/examples/jsm/postprocessing/RenderPass.js", "6c9b8a539ea16e89"], ["three/examples/jsm/postprocessing/ShaderPass.js", "3b28a1ee27e0eb96"], ["three/examples/jsm/shaders/CopyShader.js", "4e3346db194db56a"], ["three/examples/jsm/shaders/GTAOShader.js", "e1f5dd89bca4ee67"], ["three/examples/jsm/shaders/OutputShader.js", "4944cecd49c0d4d1"], ["three/examples/jsm/shaders/PoissonDenoiseShader.js", "3dab419b23529f8f"], ["three/examples/jsm/utils/BufferGeometryUtils.js", "c25b7930e570e9ec"]];
/* Neue Fassung: nur geänderte Dateien aus dem Netz holen, gleiche (gleiche Prüfsumme) aus der alten Fassung übernehmen. */
async function melden(n) {
  const cs = await self.clients.matchAll({includeUncontrolled: true, type: 'window'});
  cs.forEach(c => c.postMessage({typ: 'laden', n, von: DATEIEN.length}));
}
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const neu = await caches.open(FASSUNG);
    const alt = new Map();
    for (const name of await caches.keys()) {
      if (!name.startsWith('bilder-') || name === FASSUNG) continue;
      const c = await caches.open(name);
      const l = await c.match('__dateien.json');
      if (!l) continue;
      for (const [u, h] of await l.json()) alt.set(u + '|' + h, c);
    }
    let i = 0;
    for (const [u, h] of DATEIEN) {
      i++;
      const c = alt.get(u + '|' + h);
      const r = c ? await c.match(u) : null;
      if (r) await neu.put(u, r);
      else {
        const f = await fetch(new Request(u, {cache: 'reload'}));
        if (!f.ok) throw new Error('Laden fehlgeschlagen: ' + u);
        await neu.put(u, f);
      }
      if (i % 4 === 0 || i === DATEIEN.length) await melden(i);
    }
    await neu.put('__dateien.json', new Response(JSON.stringify(DATEIEN), {headers: {'Content-Type': 'application/json'}}));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n.startsWith('bilder-') && n !== FASSUNG).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});
/* Filme: Safari fragt Videos stückweise an (Range). Aus dem Speicher deshalb das angefragte Stück mit 206 liefern. */
async function teilantwort(t, range) {
  const b = await t.blob();
  const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
  let a = m[1] === '' || m[1] === undefined ? NaN : parseInt(m[1], 10), z = m[2] ? parseInt(m[2], 10) : b.size - 1;
  if (isNaN(a)) { a = Math.max(0, b.size - z); z = b.size - 1; }
  z = Math.min(z, b.size - 1);
  if (a >= b.size || a > z) return new Response('', {status: 416, headers: {'Content-Range': 'bytes */' + b.size}});
  return new Response(b.slice(a, z + 1), {status: 206, statusText: 'Partial Content', headers: {
    'Content-Type': t.headers.get('Content-Type') || 'video/mp4', 'Content-Range': `bytes ${a}-${z}/${b.size}`,
    'Content-Length': String(z - a + 1), 'Accept-Ranges': 'bytes'}});
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(FASSUNG).then(c =>
    c.match(req, {ignoreSearch: true}).then(t => {
      if (t && req.headers.has('range')) return teilantwort(t, req.headers.get('range'));
      if (t) return t;
      if (req.mode === 'navigate') return c.match('./').then(i => i || fetch(req));
      return fetch(req);
    })
  ).catch(() => fetch(req)));
});
