import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setWeight, setCalories, setTotalFat, setSaturatedFat, setCholesterol, setTransFat, setSodium,
    setCarbohydrate, setFiber, setSugars, setAddedSugars, setProtein, setA, setC, setD,
    setCalcium, setIron, setPotassium
} from '../redux/ActionCreator';
import { TextField, FormLayout, Form } from '@shopify/polaris';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
    return {
        Weight: state.inputReducer.Weight,
        Calories: state.inputReducer.Calories,
        TotalFat: state.inputReducer.TotalFat,
        SaturatedFat: state.inputReducer.SaturatedFat,
        TransFat: state.inputReducer.TransFat,
        Cholesterol: state.inputReducer.Cholesterol,
        Sodium: state.inputReducer.Sodium,
        Carbohydrate: state.inputReducer.Carbohydrate,
        Fiber: state.inputReducer.Fiber,
        Sugars: state.inputReducer.Sugars,
        AddedSugars: state.inputReducer.AddedSugars,
        Protein: state.inputReducer.Protein,
        A: state.inputReducer.A,
        C: state.inputReducer.C,
        D: state.inputReducer.D,
        Calcium: state.inputReducer.Calcium,
        Iron: state.inputReducer.Iron,
        Potassium: state.inputReducer.Potassium

    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setWeight: (event) => dispatch(setWeight(event)),
        setCalories: (event) => dispatch(setCalories(event)),
        setTotalFat: (event) => dispatch(setTotalFat(event)),
        setSaturatedFat: (event) => dispatch(setSaturatedFat(event)),
        setTransFat: (event) => dispatch(setTransFat(event)),
        setCholesterol: (event) => dispatch(setCholesterol(event)),
        setSodium: (event) => dispatch(setSodium(event)),
        setCarbohydrate: (event) => dispatch(setCarbohydrate(event)),
        setFiber: (event) => dispatch(setFiber(event)),
        setSugars: (event) => dispatch(setSugars(event)),
        setAddedSugars: (event) => dispatch(setAddedSugars(event)),
        setProtein: (event) => dispatch(setProtein(event)),
        setA: (event) => dispatch(setA(event)),
        setC: (event) => dispatch(setC(event)),
        setD: (event) => dispatch(setD(event)),
        setCalcium: (event) => dispatch(setCalcium(event)),
        setIron: (event) => dispatch(setIron(event)),
        setPotassium: (event) => dispatch(setPotassium(event))
    }, dispatch)
}


class Inputbox extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FormLayout title='Vue Nutrition Label'>
                <FormLayout.Group>
                    <p><label>Serving Weight</label><TextField className='inputfield' onChange={this.props.setWeight} placeholder={this.props.Weight } value={this.props.Weight} type="number"></TextField></p>
                    <p><label>Calories</label><TextField className='inputfield' onChange={this.props.setCalories} placeholder={this.props.Calories} value={this.props.Calories} type="number"></TextField></p>
                    <p><label>Total Fat</label><TextField className='inputfield' onChange={this.props.setTotalFat} placeholder={this.props.TotalFat} value={this.props.TotalFat} type="number"></TextField></p>
                    <p><label>Saturated Fat</label><TextField className='inputfield' onChange={this.props.setSaturatedFat} placeholder={this.props.SaturatedFat} value={this.props.SaturatedFat} type="number"></TextField></p>
                    <p><label>Trans Fat</label> <TextField className='inputfield' onChange={this.props.setTransFat} placeholder={this.props.TransFat} value={this.props.TransFat} type="number"></TextField></p>
                    <p><label>Cholesterol</label> <TextField className='inputfield' onChange={this.props.setCholesterol} placeholder={this.props.Cholesterol} value={this.props.Cholesterol} type="number"></TextField></p>
                    <p><label>Sodium</label> <TextField className='inputfield' onChange={this.props.setSodium} placeholder={this.props.Sodium} value={this.props.Sodium} type="number"></TextField></p>
                    <p><label>Carbohydrate</label> <TextField className='inputfield' onChange={this.props.setCarbohydrate} placeholder={this.props.Carbohydrate} value={this.props.Carbohydrate} type="number"></TextField></p>
                    <p><label>Fiber</label> <TextField className='inputfield' onChange={this.props.setFiber} placeholder={this.props.Fiber} value={this.props.Fiber} type="number"></TextField></p>
                    <p><label>Sugars</label> <TextField className='inputfield' onChange={this.props.setSugars} placeholder={this.props.Sugars} value={this.props.Sugars} type="number"></TextField></p>
                    <p><label>Added Sugars</label> <TextField className='inputfield' onChange={this.props.setAddedSugars} placeholder={this.props.AddedSugars} value={this.props.AddedSugars} type="number"></TextField></p>
                    <p><label>Protein</label> <TextField className='inputfield' onChange={this.props.setProtein} placeholder={this.props.Protein} value={this.props.Protein} type="number"></TextField></p>
                    <p><label>Vitamin A</label> <TextField className='inputfield' onChange={this.props.setA} placeholder={this.props.A} value={this.props.A} type="number"></TextField></p>
                    <p><label>Vitamin C</label> <TextField className='inputfield' onChange={this.props.setC} placeholder={this.props.C} value={this.props.C} type="number"></TextField></p>
                    <p><label>Vitamin D</label> <TextField className='inputfield' onChange={this.props.setD} placeholder={this.props.D} value={this.props.D} type="number"></TextField></p>
                    <p><label>Calcium</label> <TextField className='inputfield' onChange={this.props.setCalcium} placeholder={this.props.Calcium} value={this.props.Calcium} type="number"></TextField></p>
                    <p><label>Iron</label> <TextField className='inputfield' onChange={this.props.setIron} placeholder={this.props.Iron} value={this.props.Iron} type="number"></TextField></p>
                    <p><label>Potassium</label> <TextField className='inputfield' onChange={this.props.setPotassium} placeholder={this.props.Potassium} value={this.props.Potassium} type="number"></TextField></p>
                </FormLayout.Group>
            </FormLayout>

        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Inputbox);


