// Setup
let recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  let record = records[id];
  if(prop !== "tracks" && value !== "") {
    record[prop] = value;
  }
  // if(prop === "tracks" && !record[prop]) {
  //   record[prop] = [];
  // }
  // if(prop === "tracks" && value !== "") {
  //   record[prop].push(value);
  // }
  if(prop === "tracks") {
    record[prop] = record[prop] || []; // short circuit evaluation
    record[prop].push(value);
  }
  if(value === "") {
    delete record[prop];
  }
  return records;
}

function updateRecordsES6(records, id, prop, value) {
  let record = records[id];
  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");