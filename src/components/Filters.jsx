import { useFilters } from '../Hooks/useFilters.jsx'
import React, { useState, useId } from 'react'
import './Filters.css'

const Filters = () => {
    const { setFilters } = useFilters();
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId;
    const categoryFilterId = useId;

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div >
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice} />
            </div>
            <span>$ {minPrice}</span>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory} className='seleccion'>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters