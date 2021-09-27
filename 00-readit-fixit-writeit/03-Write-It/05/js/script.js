const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write('<table>');
for (i=0; i<fees.length; i++){
  document.write(wrapWithTag(fees[i].price , 'td'));
  for (x=0; x<extras.length; x++) {
    document.write('<tr>');
    document.write(wrapWithTag(fees[i].price , 'td'));
    document.write(wrapWithTag(extras[x].price, 'td'));
    const sum = fees[i].price + extras[x].price;
    document.write(wrapWithTag(sum, 'td'));
    document.write('</tr>');
  }
}
document.write('</table>');