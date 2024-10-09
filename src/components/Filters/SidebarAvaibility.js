import React from 'react'

const SidebarAvaibility = () => {
  return (
    <div>
      <div class='pb-6'>
         <div>
         <input class="mr-2" type="checkbox" name="filter.v.avaibility"/>
         <label class="mt-4" for="filter.v.avaibility-1">In stock</label>
         </div>
         <div>
         <input class="mr-2" type="checkbox" name="filter.v.avaibility"/>
         <label class="mt-4" for="filter.v.avaibility-1">Out of stock</label>
         </div>
      </div>
    </div>
  )
}

export default SidebarAvaibility
