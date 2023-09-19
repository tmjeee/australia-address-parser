import { Parser } from './parser';


test('parseLocation', () => {

  const expectedTestResultsByAddress = {
    '1 Darling Island Road, Pyrmont NSW 2009': {
      streetNumber: '1',
      streetName: 'Darling Island',
      streetType: 'RD',
      suburb: 'Pyrmont',
      state: 'NSW',
      postcode: '2009'
    },
    '51 Montacute Road, Campbelltown SA 5074': {
      streetNumber: '51',
      streetName: 'Montacute',
      streetType: 'RD',
      suburb: 'Campbelltown',
      state: 'SA',
      postcode: '5074'
    },
    '13A Burlina court, Elizabeth Hills NSW 2171': {
      unitType: 'unit',
      unitNumber: '13A',
      streetName: 'Burlina',
      streetType: 'court',
      suburb: 'Elizabeth Hills',
      state: 'NSW',
      postcode: '2171'
    },
    'Breakfast Creek Rd & Austin St, Newstead QLD 4006': {
      streetName1: 'Breakfast Creek',
      streetType1: 'Rd',
      streetName2: 'Austin',
      streetType2: 'St',
      suburb: 'Newstead',
      state: 'QLD',
      postcode: '4006',
      streetName: 'Breakfast Creek Rd & Austin St'
    }
  }

  const parser = new Parser();

  Object.keys(expectedTestResultsByAddress).forEach(address => {
    const expected = expectedTestResultsByAddress[address];
    expect(parser.parseLocation(address)).toEqual(expected);
  });
});
