
if (Buildings.find().count() === 0 ) {
  Buildings.insert({
    bname: 'cuatro36',
    url: 'http://www.4gradosparavivir.com/'
  });
  Buildings.insert({
    bname: 'Design Center',
    url: 'http://designcenter.com.gt/site/'
  });
}

if (Spots.find().count() === 0 ) {
    Spots.insert({
      pnumber: '001',
      status: 'Ocupied',
      bname: 'cuatro36',
      timeinit: 80
    });
    Spots.insert({
      pnumber: '002',
      status: 'Ocupied',
      bname: 'cuatro36',
      timeinit: 51
    });
    Spots.insert({
      pnumber: '003',
      status: 'Ocupied',
      bname: 'cuatro36',
      timeinit: 92
    });
}
