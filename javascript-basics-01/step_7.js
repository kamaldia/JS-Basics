var shoe_size = prompt("Enter your shoe size");
var birth_year = prompt("Enter your birth year");
function witchCraft(shoe_size , birth_year) {
  return ((((( shoe_size * 2 ) + 5 ) * 50 ) - birth_year ) + 1766 )
}
alert("The result is: "+ witchCraft(shoe_size , birth_year));
