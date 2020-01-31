import React, { Component } from 'react';
import { Button, Layout } from '@shopify/polaris';
import { connect } from 'react-redux';
import { Card, Caption, DescriptionList, TextContainer, TextField, DataTable, TextStyle } from '@shopify/polaris';

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

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            units: 1,
            SaturatedF: 345
        }
    }
    render() {
        var q = this.state.units * this.props.Weight / 200;
        return (
            <Card title='Nutrition Facts'>
                <Card.Section>
                    <TextField type="number" style={{ width: '20px' }} placeholder={this.state.units} onChange={(event) => this.setState({ units: event })} value={this.state.units}></TextField>
                    <TextContainer>serving ({this.state.units * (this.props.Weight)}g)</TextContainer>
                </Card.Section>

                <Card.Section title='Amount Per Serving'>
                <DescriptionList
                        items={[
                            {
                                term: `Calories`,
                                description:
                                    `${this.props.Calories}`
                            }]}/>
                </Card.Section>

                <Card.Section>
                    <DescriptionList
                        items={[
                            {
                                term: ``,
                                description:`                                       % Daily Value*`
                            },
                            {
                                term: `Total Fat ${this.props.TotalFat}`,
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: `Saturated Fat  ${this.props.SaturatedFat}`,
                                description: `             ${this.state.units * (this.state.SaturatedF + 5 * (Math.floor(this.props.SaturatedFat) - 69))}%`,
                                a: `asds%`

                            },
                            {
                                term: 'Trans Fat',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Cholesterol ',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Sodium ',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Total Carbohydrates\n',
                                description: `             ${this.props.Calories}`
                            },
                            {
                                term: 'Dietary Fiber ',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Includes 0ggrams Added Sugars',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Protein ',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Vitamin A 50IU',
                                description: `             ${this.props.Calories}`
                            },
                            {
                                term: 'Vitamin C 50IU',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Vitamin D 50IU',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Calcium 460mg',
                                description:`             ${this.props.Calories}`
                            },
                            {
                                term: 'Potassium 4700mg',
                                description: `             ${this.props.Calories}`
                            },
                            {
                                term: 'Caffeine mg',
                                description:`             ${this.props.Calories}`
                            }
                        ]}
                    />

                </Card.Section>

                <Card.Section>
                    <TextContainer>
                        The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advice.
                        <Caption>Ingredients:</Caption>
                        Swiss cheese, American cheese, more cheese and a burger.
                        </TextContainer>

                </Card.Section>

            </Card>
        )
    }
}


export default connect(mapStateToProps)(View);
