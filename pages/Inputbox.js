import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setWeight, setCalories, setTotalFat, setSaturatedFat, setCholesterol, setTransFat, setSodium,
    setCarbohydrate, setFiber, setSugars, setAddedSugars, setProtein, setA, setC, setD,
    setCalcium, setIron, setPotassium
} from '../redux/ActionCreator';
import { TextField, FormLayout, Form } from '@shopify/polaris';


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
    return {
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
    }
}


class Inputbox extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        console.log('comdidmount')
    }

    render() {
        return (
            <Form className='Inputbox'>
                <FormLayout className='inputform'>
                    <p><label>Serving Weight</label><TextField className='inputfield' onChange={this.props.setWeight} value={this.props.Weight} type="number"></TextField></p>
                    <p><label>Calories</label><TextField className='inputfield' onChange={this.props.setCalories} value={this.props.Calories} type="number"></TextField></p>
                    <p><label>Total Fat</label><TextField className='inputfield' onChange={this.props.setTotalFat} value={this.props.TotalFat} type="number"></TextField></p>
                    <p><label>Saturated Fat</label><TextField className='inputfield' onChange={this.props.setSaturatedFat} value={this.props.SaturatedFat} type="number"></TextField></p>
                    <p><label>Trans Fat</label> <TextField className='inputfield' onChange={this.props.setTransFat} value={this.props.TransFat} type="number"></TextField></p>
                    <p><label>Cholesterol</label> <TextField className='inputfield' onChange={this.props.setCholesterol} value={this.props.Cholesterol} type="number"></TextField></p>
                    <p><label>Sodium</label> <TextField className='inputfield' onChange={this.props.setSodium} value={this.props.Sodium} type="number"></TextField></p>
                    <p><label>Carbohydrate</label> <TextField className='inputfield' onChange={this.props.setCarbohydrate} value={this.props.Carbohydrate} type="number"></TextField></p>
                    <p><label>Fiber</label> <TextField className='inputfield' onChange={this.props.setFiber} value={this.props.Fiber} type="number"></TextField></p>
                    <p><label>Sugars</label> <TextField className='inputfield' onChange={this.props.setSugars} value={this.props.Sugars} type="number"></TextField></p>
                    <p><label>Added Sugars</label> <TextField className='inputfield' onChange={this.props.setAddedSugars} value={this.props.AddedSugars} type="number"></TextField></p>
                    <p><label>Protein</label> <TextField className='inputfield' onChange={this.props.setProtein} value={this.props.Protein} type="number"></TextField></p>
                    <p><label>Vitamin A</label> <TextField className='inputfield' onChange={this.props.setA} value={this.props.A} type="number"></TextField></p>
                    <p><label>Vitamin C</label> <TextField className='inputfield' onChange={this.props.setC} value={this.props.C} type="number"></TextField></p>
                    <p><label>Vitamin D</label> <TextField className='inputfield' onChange={this.props.setD} value={this.props.D} type="number"></TextField></p>
                    <p><label>Calcium</label> <TextField className='inputfield' onChange={this.props.setCalcium} value={this.props.Calcium} type="number"></TextField></p>
                    <p><label>Iron</label> <TextField className='inputfield' onChange={this.props.setIron} value={this.props.Iron} type="number"></TextField></p>
                    <p><label>Potassium</label> <TextField className='inputfield' onChange={this.props.setPotassium} value={this.props.Potassium} type="number"></TextField></p>
                </FormLayout>
            </Form>

        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Inputbox);


