
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
      pnumber: 'Parking Spot 001',
      url: '',
      status: 'Ocupied',
      bname: 'cuatro36',
      ownername: 'User 001',
      ownerusername: 'Owner Apto 001'
    });
    Spots.insert({
      pnumber: 'Parking Spot 002',
      url: '',
      status: 'Ocupied',
      bname: 'cuatro36',
      ownername: 'User 002',
      ownerusername: 'Owner Apto 002'
    });
    Spots.insert({
      pnumber: 'Parking Spot 003',
      url: '',
      status: 'Ocupied',
      bname: 'cuatro36',
      ownername: 'User 003',
      ownerusername: 'Owner Apto 003'
    });
}
