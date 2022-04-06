import React from 'react';

import { Formik, Field, Form } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import fontawesome

import './SearchForm.scss';

const SearchForm = () => {

  return (
    <div className="SearchForm">
    SearchForm Component
    <Formik
      initialValues={
        {
          TypeHome:" ",
          Bedrooms:" ",
          Bathrooms:" ",
          Equipment:" ",
          Condition: " ",
          PriceRange:" ",
          PublicationDate:" ",
          MoreFilters:" "
      }
      }
      // onSubmit={myFunction()}
    >
      <Form>
        <div className='grid'>
        <label className='col'>
          <p>Type of Home</p>
          <div className='grid'>
            <div className='col'>
              <Field name="TypeHome" type="checkbox" value="flat"/>Flat/Apartment
            </div>
            <div className='col'>
              <Field name="TypeHome" type="checkbox" value="duplex"/>Duplex
            </div>
          </div>
          <div className='grid'>
            <div className='col'>
              <Field name="TypeHome" type="checkbox" value="house"/>House
            </div>
            <div className='col'>
              <Field name="TypeHome" type="checkbox" value="penthouse"/>Penthouse
            </div>
          </div>
        </label>
        <label className='col'>
          <p>Bedrooms <FontAwesomeIcon icon={solid('bed')} /></p>
          <div className='grid'>
          <Field name="Bedrooms" type="checkbox" value="0"/>0 (studio)
          <Field name="Bedrooms" type="checkbox" value="1"/>1
          <Field name="Bedrooms" type="checkbox" value="2"/>2
          <Field name="Bedrooms" type="checkbox" value="3"/>3
          <Field name="Bedrooms" type="checkbox" value="4"/>4 or +
          </div>
        </label>
        <label className='col'>
          <p>Bathrooms <FontAwesomeIcon icon={solid('toilet')} /></p>
          <div className='grid'>
          <Field name="Bathrooms" type="checkbox" value="1"/>1
          <Field name="Bathrooms" type="checkbox" value="2"/>2
          <Field name="Bathrooms" type="checkbox" value="3"/>3 or +
          </div>
        </label>
        <label className='col'>
          <p>Equipment</p>
          <Field name="Equipment" type="text"/>
        </label>
        </div>
        <div className='grid'>
          <label className='col'>
            <p>Condition</p>
            <div className='grid'>
              <div className='col'>
                <Field name="Condition" type="checkbox" value="new"/> New homes
                <Field name="Condition" type="checkbox" value="good"/> Good condition
              </div>
              <div className='col'>
                <Field name="Condition" type="checkbox" value="needs"/> Needs renovation
              </div>
            </div>
          </label>
          <label className='col'>
            <p>Price Range</p>
          <Field name="PriceRange" type="text" value="price"/>
          </label>
          <label className='col'>
            <p>Publication Date</p>
            <Field name="PublicationDate" type="text" value="date"/>
          </label>
          <label className='col'>
            <p>More filters</p>
            <div className='col'>
              <Field name="MoreFilters" type="checkbox" value="pets"/>Pets allowed
              <Field name="MoreFilters" type="checkbox" value="lift"/>Lift
              <Field name="MoreFilters" type="checkbox" value="garden"/>Garden
            </div>
            <div className='col'>
            <Field name="MoreFilters" type="checkbox" value="air "/>Air conditioning
              <Field name="MoreFilters" type="checkbox" value="pool"/>Swimming pool
            </div>
            <div className='col'>
            <Field name="MoreFilters" type="checkbox" value="terrace"/>Terrace
            </div>
          </label>
        </div>
      </Form>
    </Formik>
  </div>
    )
};


export default SearchForm;
