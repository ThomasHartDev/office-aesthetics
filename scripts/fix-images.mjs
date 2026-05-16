// Assigns fresh, unique Unsplash photos to every catalog product.
// Run: node scripts/fix-images.mjs
// Then delete /public/ItemPics/* and re-run seed-catalog.mjs

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { catalog } from './catalog-spec.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPEC_FILE = path.join(__dirname, 'catalog-spec.mjs');

// Fresh photo pools per category — sourced from Unsplash public API, non-premium only.
const POOLS = {
  NETWORKING_AND_SECURITY: [
    // ethernet / cable / networking
    '1544197150-b99a580bb7a8','1683322499436-f4383dd59f5a','1594915440248-1e419eba6611',
    '1691435828932-911a7801adfb','1698668975271-2ba9a323be6b','1591808216268-ce0b82787efe',
    '1624965439943-09e0238644e2','1554098415-4052459dc340','1546124404-9e7e3cac2ec1',
    '1528845922818-cc5462be9a63','1548544027-1a96c4c24c7a','1531668383211-64743e924c66',
    '1682559736721-c2e77ff4c650','1663932210347-164a05ed0ccd','1574405345169-f45c7d66480e',
    // security / webcam / laptop
    '1623949556303-b0d17d198863','1520697830682-bbb6e85e2b0b','1590769398823-a62d7ecc25e6',
    '1614588876378-b2ffa4520c22','1651169610763-fddf392fadb4','1622750342107-4b60e2704157',
    '1636569826709-8e07f6104992','1629429407756-446d66f5b24e','1566476927456-446189d7b1ca',
    '1613398773682-9e272a85f203','1610664934028-b0d1fc08608e','1762681290673-ba1ad4ea0875',
    '1538844816599-5fce5717b7e6','1723187939911-cb1a229e5adb','1585610024909-aa885728c7c1',
  ],
  COMPUTERS_AND_ELECTRONICS: [
    // monitors / workstation setups
    '1614624533048-a9c2f9cb5a96','1636736565150-5c927372cbca','1647790292957-c7f3b44b3973',
    '1588746363141-364bcdd1d04d','1696260097215-3bcfc3e198c2','1599404062969-0a81537dfd80',
    '1549907062-15122f762606','1761446812468-d88eef0d01da','1759322945173-76b604965b2f',
    '1770899621442-24237af4c8b4','1686634369724-6fedf791a8bf','1764025130362-0162c3dd2035',
    '1773525911805-bebab1d3e0e4',
    // keyboards / mice / accessories
    '1547394765-185e1e68f34e','1601445638532-3c6f6c3aa1d6','1541140532154-b024d705b90a',
    '1587831990711-23ca6441447b','1511467687858-23d96c32e4ae','1551515300-2d3b7bb80920',
    '1585314614250-d213876625e1','1707592691247-5c3a1c7ba0e3','1561112078-7d24e04c3407',
    '1491947153227-33d59da6c448','1626958390916-90be78b9bfe6','1616248304589-6a3d8d60ad7d',
    '1584727151652-d09b17ebf23f','1510674485131-dc88d96369b4','1631749352438-7d576312185d',
  ],
  COMMUNICATION: [
    '1546435770-a3e426bf472b','1484704849700-f032a568e944','1585298723682-7115561c51b7',
    '1572536147248-ac59a8abfa4b','1713801129175-8e60c67e0412','1483032469466-b937c425697b',
    '1533225307893-db39ecce099a','1585771724684-38269d6639fd','1531860898813-8cecde84646c',
    '1658927420987-488ade098001','1646500366920-b4c5ce29237d','1682391130094-e4e19f9290e9',
    '1570618210461-fd5f194f9b59','1648316316198-5f15553e55df','1651748749471-ffb243c9ca2b',
  ],
  LIGHTING: [
    '1494438639946-1ebd1d20bf85','1621177555630-b861919c864f','1621177555452-bedbe4c28879',
    '1570974802254-4b0ad1a755f5','1579326882518-21eaa7893b02','1601642964568-1917224f4e4d',
    '1526040652367-ac003a0475fe','1585597647877-6eaa01bf9a05','1543512214-4f76e81f8bfc',
    '1614743559948-d158e36ecb4f','1652198050957-fd1c6aab021f','1619608135352-868e8313e121',
    '1731762524352-b5663f83a830','1711617481872-7851c36cc5c9','1574025876844-6c9ba8602866',
  ],
  OFFICE_SUPPLIES: [
    '1471107340929-a87cd0f5b5f3','1579017308347-e53e0d2fc5e9','1517971071642-34a2d3ecc9cd',
    '1501618669935-18b6ecb13d6d','1483546416237-76fd26bbcdd1','1462642109801-4ac2971a3a51',
    '1591195852468-03a01d1375d6','1483546363825-7ebf25fb7513','1587135991058-8816b028691f',
    '1550592704-6c76defa9985','1623697899811-f2403f50685e','1598620617148-c9e8ddee6711',
    '1601321268954-22646044f7d0','1516414447565-b14be0adf13e','1473186505569-9c61870c11f9',
  ],
  DESKS_AND_TABLES: [
    '1575318633968-0383e7d07ca0','1597072689227-8882273e8f6a','1493934558415-9d19f0b2b4d2',
    '1611269154421-4e27233ac5c7','1704655295066-681e61ecca6b','1563253746-350a0a877afa',
    '1594580701468-e5678582b8ce','1605436247078-f0ef43ee8d5c','1595351475754-8a520e0bc3a3',
    '1625107399301-a78ae8d2a1fe','1677100091644-53575a136cfb','1677100091694-a09a1e468a7b',
    '1625655164397-08d7b11ab280','1625655164422-a954607ebca4','1519219788971-8d9797e0928e',
  ],
  ERGONOMIC_ACCESSORIES: [
    '1646768878729-ac69ab1cdb42','1537301496981-ceee9e41384a','1760348213270-7cd00b8c3405',
    '1653191722556-abd24773bba8','1707167144717-683f1714939b','1630951633296-dcc73fab12ca',
    '1671063125680-a2ebbebfbae5','1630209351449-14f60b0e4103','1727464996084-3cc1ec8e04ea',
    '1755309448312-8776b3d098f0','1590408867096-a6f7a9de19c0','1750975314977-374f2290db53',
    '1760348213285-c6dd101bf349','1526958938731-27f1ccdb1817','1631755218195-8d8e7b2c04d6',
  ],
  STORAGE_SOLUTIONS: [
    '1600422086908-72be2c8f5f3f','1603533880965-e1302f35290b','1521459382675-a3f2f35a6b9a',
    '1765371513189-44702dcee4be','1721521918228-90eeed46f52d','1649954174454-767fd0a40fb6',
    '1528027656671-6d156f4f1f48','1668893973066-95b14ce86e71','1718133459670-24c55af0fae6',
    '1605484583258-221ca6812773','1748681257876-44e2aa2070b4','1701795685126-1a047a9a03d9',
    '1776482128061-0367ecc2028c','1720007292383-c8516d467bd0','1629652486739-c7df300a69e0',
  ],
  CLEANING_AND_MAINTENANCE: [
    '1627905646269-7f034dcc5738','1628177142898-93e36e4e3a50','1594159855327-c8c0842a2132',
    '1697463624716-cd2f0423d9d9','1698349145149-f1e4126f2531','1601160458000-2b11f9fa1a0e',
    '1771918050103-57b5de00d960','1762341116319-05a8355fcfc9','1679508056709-03167f9c13ba',
    '1664464683525-29b5d442af54','1630659508975-00941de4d982','1498409785966-ab341407de6e',
    '1755190121589-ee9ef0aaa5a0','1774494168068-0f716c3aafcf','1618329027054-0d4cf29d97e6',
  ],
  CHAIRS_AND_SEATING: [
    '1616144046096-4eb12ab5ea7b','1616144049673-799a1a9c2f10','1639690404055-29bd387a7542',
    '1758607010203-d6b7f6ec9262','1776548759492-3355a285f68f','1776548759455-310ef8cd49ec',
    '1776548759598-aa916464ed1f','1776548759593-6fa64c60129f','1776548759644-5da0988a7874',
    '1776548759448-499e26792d83','1762423992203-552b7c671b92','1765765419166-3bf1af848951',
    '1598300042247-d088f8ab3a91','1572521165329-b197f9ea3da6','1666005368598-2164c0e486c8',
  ],
  HEALTH_AND_WELLNESS: [
    '1591291621164-2c6367723315','1591291621060-89264efbeaed','1661307897681-f2bec8f8383e',
    '1646376248949-9db1b3b7bce4','1585076795621-7431cc05b271','1541757089-5ac641ab48cd',
    '1653617748437-895c016e88b1','1763004871583-4183d64096b1','1599447291786-724cfd131568',
    '1611682011252-21667a85e3ac','1738524108286-9a24f62813c0','1541757089-314a0d7bdb59',
    '1599447291850-9ea36b0a3d66','1541757088-1c919081357f','1738524108206-458a7bd6560e',
  ],
  DECOR_AND_COMFORT: [
    '1650108047753-460767fc9ebd','1769653907239-c8f1a1843b08','1771817778067-1dd38dfa56dd',
    '1777882201052-a746eb59264d','1596420547408-0f11aaeff6ba','1777738982318-73c3c3fba29c',
    '1772795810264-2b46ab4622ea','1611651625032-153048f0da00','1766038843994-e17d3a7357ac',
    '1743186496240-b6cd07a9cdae','1773995419788-451aec4bfdef','1761375211973-86625f5c5cba',
    '1687848666831-ceeabe541295','1766241694661-b9fade569f91','1777451440783-7da36ec76377',
  ],
};

function base(id) {
  return `https://images.unsplash.com/photo-${id}`;
}

// Assign 2 images per product via circular indexing per category.
// With 15 IDs per category pool and 15 products × 2 slots, each ID appears at most twice,
// but every PAIR is unique — no two products in a category share the same two images.
const categoryIdx = {}; // tag -> current pool index
const assignments = {}; // slug -> [url, url]

for (const item of catalog) {
  const pool = POOLS[item.tag] ?? [];
  if (pool.length === 0) { assignments[item.slug] = []; continue; }
  const idx = categoryIdx[item.tag] ?? 0;
  const id1 = pool[idx % pool.length];
  const id2 = pool[(idx + 1) % pool.length];
  categoryIdx[item.tag] = idx + 2;
  assignments[item.slug] = [base(id1), base(id2)];
}

// Patch catalog-spec.mjs text — replace each images array in-place
let text = await fs.readFile(SPEC_FILE, 'utf8');

for (const [slug, urls] of Object.entries(assignments)) {
  // Match from 'slug: "…"' forward to the images block and replace it
  const escapedSlug = slug.replace(/[-]/g, '\\-');
  // Find the product block containing this slug, then its images array
  const re = new RegExp(
    `(slug:\\s*"${escapedSlug}"[\\s\\S]*?images:\\s*\\[)([\\s\\S]*?)(\\],)`,
    ''
  );
  const replacement = (_, pre, _old, post) => {
    const lines = urls.map(u => `      "${u}"`).join(',\n');
    return `${pre}\n${lines},\n    ${post}`;
  };
  text = text.replace(re, replacement);
}

await fs.writeFile(SPEC_FILE, text, 'utf8');
console.log(`Updated ${Object.keys(assignments).length} products with fresh unique images.`);

// Report any leftover duplicates
const allIds = [];
for (const urls of Object.values(assignments)) {
  for (const u of urls) {
    const id = u.replace('https://images.unsplash.com/photo-', '');
    allIds.push(id);
  }
}
const counts = {};
for (const id of allIds) counts[id] = (counts[id] ?? 0) + 1;
const dups = Object.entries(counts).filter(([, n]) => n > 1);
if (dups.length === 0) {
  console.log('All photo IDs are unique across the catalog.');
} else {
  console.log('Remaining duplicates:');
  for (const [id, n] of dups) console.log(`  photo-${id} x${n}`);
}
