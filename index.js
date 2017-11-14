var recipes = {
  eggs: 1,
  beefstrips: '8 oz',
  darksoysauce: '1 tbsp',
  water: '1 cup'
}

function updateObjectWithKeyandValue(object, key, value) {
  recipes[key] = value
  return recipes
}
