//* solution found here: https://stackoverflow.com/questions/51564963/filter-object-by-tag-array-inside-an-array-of-objects

export default function filtering(items, constraints) {
   return items.filter(item =>
      constraints.every(constraint => 
          item.tags.some(obj => obj === constraint)
      )
  );
}
