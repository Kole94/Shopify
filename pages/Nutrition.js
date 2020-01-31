import React, { Component } from 'react';
import { Button, Layout } from '@shopify/polaris';
import { connect } from 'react-redux';
import { Card, DescriptionList, DataTable  } from '@shopify/polaris';

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

class Nutrition extends Component {

    state = {
        units: 1
    }

    render(){
      const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];
        return(
<Card className="Nutrition">


     <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Typical Values',
            'Per 100g	',
            'serving (200g)	',
            '%*(200g)'
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />

    <div itemtype="http://schema.org/NutritionInformation" className="nf uk">
        <div className="nf-title">Nutrition</div> 
        <table>
            <thead>
                <tr>
                <th>Typical Values</th>
                <th>Per 100g</th> 
        <th>
            <input type="text" data-role="none" onChange={(event) => this.setState({units: event.target.value})}value={this.state.units} aria-label="Change the Quantity Textbox"
            className="nf-modifier-field">
            </input>
            serving
            
              ({this.state.Weight})
            </th> <th>%*({this.state.Weight})</th>
            </tr>
            </thead> 
            <tbody><tr><td>Energy</td> 
            <td> 1094kj</td> <td> 2189kj</td> 
            <td></td></tr> <tr><td></td> <td itemprop="calories"> 262kcal</td> 
            <td itemprop="calories"> 523kcal</td> <td> 26%</td></tr> <tr><td>Total Fat</td>
             <td itemprop="fatContent"> 24
             <span aria-hidden="true">g</span>
             <span className="sr-only"> grams</span></td> <td itemprop="fatContent"> 49
             <span aria-hidden="true">g</span><span className="sr-only"> grams</span></td> 
             <td> 70%</td></tr> <tr><td className="nf-indent">Saturated Fat</td> 
             <td itemprop="saturatedFatContent"> 35<span aria-hidden="true">g</span>
             <span className="sr-only"> grams</span></td> <td itemprop="saturatedFatContent"> 69
             <span aria-hidden="true">g</span><span className="sr-only"> grams</span></td> 
             <td> 345%</td></tr> <tr><td>Carbohydrate</td> <td itemprop="carbohydrateContent"> 3.8
             <span aria-hidden="true">g</span><span className="sr-only"> grams</span></td> 
             <td itemprop="carbohydrateContent"> 7.6<span aria-hidden="true">g</span>
             <span className="sr-only"> grams</span></td> <td> 3%</td></tr> <tr>
                 <td className="nf-indent">Sugars</td> <td itemprop="sugarContent"> 11
                 <span aria-hidden="true">g</span><span className="sr-only"> grams</span></td>
                  <td itemprop="sugarContent"> 23<span aria-hidden="true">g</span>
                  <span className="sr-only"> grams</span></td> <td> 26%</td></tr> 
                  <tr><td>Fibre</td> <td itemprop="fiberContent">{this.state.units*Math.round((this.props.Fiber/2)* 10 ) / 10}<span aria-hidden="true">g</span>
                  <span className="sr-only"> grams</span></td> <td itemprop="fiberContent"> {Math.floor(this.props.Fiber)}
                  <span aria-hidden="true">g</span><span className="sr-only"> grams</span></td> 
                  <td></td></tr> <tr><td>Protein</td> <td itemprop="proteinContent">{this.state.units*Math.floor(this.props.Protein/2)}
                  <span aria-hidden="true">g</span><span className="sr-only"> grams</span></td> 
                  <td itemprop="proteinContent">{this.state.units*Math.floor(this.props.Protein)}<span aria-hidden="true">g</span>
        <span className="sr-only"> grams</span></td> <td> {78 + Math.floor(this.props.Protein - 38)*2}%</td></tr> 
                  <tr><td>Salt</td> <td itemprop="sodiumContent"> 0.98<span aria-hidden="true">g</span>
                  <span className="sr-only">grams</span></td> <td itemprop="sodiumContent"> 2
                  <span aria-hidden="true">g</span><span className="sr-only">grams</span></td> 
                  <td> 33%</td></tr></tbody> <tfoot><tr><td colspan="4">
                      <span>* Reference intake of an average adult (8400kj/2000kcal)</span> 
                      <div className="nf-ingredient-statement"><strong>Ingredients:</strong>
                       <div>Swiss cheese, American cheese, more cheese and a burger.</div></div> 
                       <div className="nf-disclaimer">Disclaimer</div></td></tr></tfoot>
                       </table>
                       </div>
                       </Card>
        )
    }
}


export default connect(mapStateToProps)(Nutrition);
