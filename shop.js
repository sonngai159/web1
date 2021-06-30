
const showSort = (sorticonid,dropdownid) =>{
    const sort = document.getElementById(sorticonid),
    dropdown = document.getElementById(dropdownid);

    if( sorticonid && dropdownid ){
        sort.addEventListener('click',()=>{
            dropdown.classList.toggle('dropdown__show');
        })
    }
}
showSort('sort-icon','sort-dropdown-id');


