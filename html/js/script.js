var $input = $("#zipcode");
$input.typeahead({
  source: [
    {id: "60450", name: "Morris, IL 60450"},
    {id: "00000", name: "Nowhersville, XX 00000"},
    {id: "10003", name: "Willington, AZ 10003"},
    {id: "11377", name: "Woodside, NY 11377"}
  ],
  autoSelect: true
});

var $input2 = $("#category");
$input2.typeahead({
  source: [
    {id: "1", name: "Family"},
    {id: "2", name: "Criminal Defense"},
    {id: "3", name: "Business"},
    {id: "4", name: "Personal Injury"},
    {id: "5", name: "Product & Services"},
    {id: "6", name: "Real State"},
    {id: "7", name: "Employment"},
    {id: "8", name: "Immigration"},
    {id: "6", name: "Government"}

  ],
  autoSelect: true
});