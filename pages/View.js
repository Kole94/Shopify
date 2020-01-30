import React, { Component } from 'react';
import { Button, Layout } from '@shopify/polaris';
import { connect } from 'react-redux';

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
            <div className="View">
                <div itemtype="http://schema.org/NutritionInformation" className="nf us">

                    <div className="nf-title">Nutrition Facts</div>

                    <div className="nf-line">
                        <div className="nf-serving">
                            <input type="text" data-role="none" onChange={(event) => this.setState({ units: event.target.value })} value={this.state.units} aria-label="Change the Quantity Textbox" className="nf-modifier-field"></input>
                            <div className="nf-item-name">
                                <div>
                                    serving ({this.state.units * (this.props.Weight)})
                                    </div>
                            </div>
                        </div>
                    </div>


                    <div className="nf-bar2"></div>
                    <div className="nf-amount-per-serving">Amount Per Serving</div>

                    <div className="nf-calories">
                        <span>Calories</span>
                        <span itemprop="calories" className="nf-pr">{q*(Math.floor(this.props.Calories))}</span>
                    </div>

                    <div className="nf-bar1"></div>
                    <div className="nf-line nf-text-right">
                        <span className="nf-highlight nf-percent-dv">%
                            <span>Daily Value</span>*</span></div>
                    <div className="nf-line">
                        <span aria-hidden="true" className="nf-highlight nf-pr">75%</span>
                        <span className="nf-highlight">Total Fat</span>
                        <span itemprop="fatContent">
                            <span aria-hidden="true">g</span>
                            <span className="sr-only"> grams</span>
                        </span>
                    </div>

                    <div className="nf-line nf-indent">
                        <span aria-hidden="true" className="nf-highlight nf-pr">{this.state.units*(this.state.SaturatedF + 5 * (Math.floor(this.props.SaturatedFat) - 69))}%</span>
                        <span>Saturated Fat</span>
                        <span itemprop="saturatedFatContent">
                            <span aria-hidden="true">g</span>
                            <span className="sr-only"> grams</span>
                        </span>
                    </div>

                    <div className="nf-line nf-indent">
                        <span>Trans Fat</span>
                        <span itemprop="transFatContent">
                            <span aria-hidden="true">  {this.state.units*this.props.TransFat}g</span>
                            <span className="sr-only"> grams</span>
                        </span>
                    </div>

                    <div className="nf-line">
        <span aria-hidden="true" className="nf-highlight nf-pr">{this.state.units*(3 + Math.floor((this.props.Cholesterol - 10)/3))}%</span>
                        <span className="nf-highlight">Cholesterol</span>
                        <span itemprop="cholesterolContent">
        <span aria-hidden="true">{this.state.units*this.props.Cholesterol}mg</span>
                            <span className="sr-only"> milligrams</span>
                        </span>
                    </div>
                    <div className="nf-line">
                        <span aria-hidden="true" className="nf-highlight nf-pr">{this.state.units*(33 + Math.floor((Math.floor(this.props.Sodium) - 780) / 20))}%</span>
                        <span className="nf-highlight">Sodium</span>
                        <span itemprop="sodiumContent">
                            <span aria-hidden="true">{this.state.units*(Math.floor(this.props.Sodium))}mg</span>
                            <span className="sr-only"> milligrams</span>
                        </span>
                    </div>

                    <div className="nf-line">
                        <span aria-hidden="true" className="nf-highlight nf-pr">{this.state.units*(3 + Math.floor((Math.floor(this.props.Carbohydrate) - 7) / 3))}%</span>
                        <span className="nf-highlight">Total Carbohydrates</span>
                        <span itemprop="carbohydrateContent">
                            <span aria-hidden="true">{this.state.units*(Math.floor(this.props.Carbohydrate))}g</span>
                            <span className="sr-only"> grams</span>
                        </span>
                    </div>
                    <div className="nf-line nf-indent">
                        <span aria-hidden="true" className="nf-highlight nf-pr">{this.state.units*(60 + (Math.floor(this.props.Fiber) - 15) * 4)}%</span>
                        <span>Dietary Fiber</span>
                        <span itemprop="fiberContent">
                            <span aria-hidden="true">{this.state.units*(Math.floor(this.props.Fiber))}g</span>
                            <span className="sr-only"> grams</span>
                        </span></div>

                    <div className="nf-line nf-indent">
                        <span>Sugars</span>
                        <span itemprop="sugarContent">
                            <span aria-hidden="true">{this.state.units*(Math.floor(this.props.Sugars))}g</span>
                            <span className="sr-only"> grams</span>
                        </span>
                    </div>
                    <div className="nf-line nf-indent2"><span aria-hidden="true" className="nf-highlight nf-pr">{this.state.units*(2 * this.props.AddedSugars)}%</span>
                        <span><span>Includes</span> <span itemprop="">{this.state.units*this.props.AddedSugars}<span aria-hidden="true">g</span><span className="sr-only"> grams</span></span>
                            <span>Added Sugars</span></span></div> <div className="nf-line"><span className="nf-highlight">Protein</span>
                        <span itemprop="proteinContent">
        <span aria-hidden="true">{this.state.units*(Math.floor(this.props.Protein))}g</span><span className="sr-only"> grams</span></span></div>
                    <div className="nf-bar2"></div> <div className="nf-vitamins"><div className="nf-vitamins">
                        <div className="nf-vitamin-column"><span>Vitamin A</span>{50*this.props.A}<span aria-hidden="true">IU</span>
        <span className="sr-only"> International Unit</span> <span aria-hidden="true" className="nf-pr">{this.state.units*(this.props.A)}%</span></div>
                        <div className="nf-vitamin-column"><span>Vitamin C</span> 50<span aria-hidden="true">mg</span>
                            <span className="sr-only"> milligrams</span> <span aria-hidden="true" className="nf-pr">83%</span></div>
                        <div className="nf-vitamin-column"><span>Vitamin D</span> 0<span aria-hidden="true">mcg</span>
                            <span className="sr-only"> micrograms</span> <span aria-hidden="true" className="nf-pr">0%</span></div>
                        <div className="nf-vitamin-column"><span>Calcium</span> {this.state.units* this.props.Calcium * 10 + 110}<span aria-hidden="true">mg</span>
                            <span className="sr-only"> milligrams</span> <span aria-hidden="true" className="nf-pr">{(this.state.units* this.props.Calcium)}%</span></div>
                        <div className="nf-vitamin-column"><span>Iron</span>{Math.floor(this.state.units* this.props.Iron / 6)}<span aria-hidden="true">mg</span>
                            <span className="sr-only"> milligrams</span> <span aria-hidden="true" className="nf-pr">{(this.state.units* this.props.Iron)}%</span></div>
                        <div className="nf-vitamin-column"><span>Potassium</span> 5120<span aria-hidden="true">mg</span>
                            <span className="sr-only"> milligrams</span> <span aria-hidden="true" className="nf-pr">{(this.state.units* this.props.Potassium)}%</span></div></div></div>
                    <div className="nf-bar1"></div> <div><span className="nf-highlight">Caffeine</span> <span aria-hidden="true">mg</span>
                        <span className="sr-only"> milligrams</span></div> <div className="nf-bar2"></div> <div className="nf-footnote"><span>
                            The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advice.</span>
                        <div className="nf-ingredient-statement">
                            <strong>Ingredients:</strong>
                            <div>Swiss cheese, American cheese, more cheese and a burger.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(View);
