////mock data generated at http://www.json-generator.com/
//var fakeData = []

var emptyData = [];

var columnMeta = [
  {
    "columnName": "id",
    "order": 1,
    "locked": false,
    "visible": true,
    "displayName": "ID"
  },
  {
    "columnName": "name",
    "order": 2,
    "locked": true,
    "visible": true,
    "displayName": "Name"
  },
  {
    "columnName": "Author",
    "order": 3,
    "locked": true,
    "visible": true
  },
  {
    "columnName": "genre",
    "order": 4,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "year",
    "order": 5,
    "locked": false,
    "visible": true
  }
];

var rowMeta = 
{
  "key": "id"
};

var propertyGridMeta = [
  {
    "columnName": "property",
    "order": 1,
    "locked": false,
    "visible": true,
    "cssClassName": "properties-name",
    "displayName": "Property"
  },
  {
    "columnName": "description",
    "order": 2,
    "locked": false,
    "visible": true,
    "cssClassName": "properties-description",
    "displayName": "Description"
  },
  {
    "columnName": "type",
    "order": 3,
    "locked": false,
    "visible": true,
    "cssClassName": "properties-type",
    "displayName": "Type"
  },
  {
    "columnName": "default",
    "order": 4,
    "locked": false,
    "visible": true,
    "cssClassName": "properties-default",
    "displayName": "Default"
  }
]



  var fakeSubgridData =  [];

  var fakeDataMethod = function(filterString, sortColumn, sortAscending, page, pageSize, callback) {
    var initialIndex = page * pageSize;
    var endIndex = initialIndex + pageSize;

    setTimeout(function() {
      var results = [],
          totalResults = 0;

      if (filterString !== 'nothing') {
        results = fakeData.slice(initialIndex, endIndex);
        totalResults = fakeData.length;
      }

      callback({
        results: results,
        totalResults: totalResults
      });
    }, 1000);
  }
