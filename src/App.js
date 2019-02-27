import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
      q1:'',
      q2:'',
      q3:'',
      q4:'',
      q5:'',
      q6:'',
      q7:'',
      q8:'',
      q9:'',
      q10:'',
      q11:'',
      q12:'',
      q13:'',
      q14:'',
      q15:''
    };


    track(e){
      // console.log(e.target);
      this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(){
      console.log(this.state)
    }

  render(){

    return (
      <div className='kmeansDIv'>
        <h1>Kmeans value</h1>

          <div>
           <div className='questionDIv'>
               <p>1. Of those listed below, what are your favorite spices?  </p>
          <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Smoked paprika and chipotle pepper'/>Smoked paprika and chipotle pepper<br/>
          <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Thyme and sage'/>Thyme and sage<br/>
          <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Basil and oregano'/>Basil and oregano<br/>
          <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Dill and parsley'/>Dill and parsley<br/>
           </div>

            <div className='questionDIv'>
                <p>2. If you were a dairy milk drinker, which would you prefer? </p>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='1%'/>1%<br/>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='2%'/>2%<br/>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='Whole milk'/>Whole milk<br/>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='Nonfat'/>Nonfat<br/>
            </div>
          </div>

          <div className='questionDIv'>
              <p> 3. What are your favorite types of dessert? </p>
              <input type="radio" name='q3' onClick={(e)=>this.track(e)}  value='Citrusy desserts like key lime pie and lemon squares'/>Citrusy desserts like key lime pie and lemon squares <br/>
              <input type="radio" name='q3' onClick={(e)=>this.track(e)}  value='Fruity pies and cakes'/>Fruity pies and cakes <br/>
              <input type="radio" name='q3' onClick={(e)=>this.track(e)}  value='Vanilla based creams, custards and puddings'/>Vanilla based creams, custards and puddings<br/>
              <input type="radio" name='q3' onClick={(e)=>this.track(e)}  value='Anything with chocolate, the darker the better'/>Anything with chocolate, the darker the better<br/>
          </div>
          <div className='questionDIv'>
              <p>4. Do you smoke (cigarettes, cigars, whatever…)? </p>
              <input type="radio" name='q4' onClick={(e)=>this.track(e)}  value='A few times a year'/>A few times a year <br/>
              <input type="radio" name='q4' onClick={(e)=>this.track(e)}  value='Never'/>Never <br/>
              <input type="radio" name='q4' onClick={(e)=>this.track(e)}  value='Daily'/>Daily<br/>
              <input type="radio" name='q4' onClick={(e)=>this.track(e)}  value='A few times a week'/>A few times a week<br/>
          </div>
          <div className='questionDIv'>
              <p>5. What kind of wine drinker are you? </p>
              <input type="radio" name='q5' onClick={(e)=>this.track(e)}  value='Happy to drink it if someone else is ordering but not my go-to beverage'/>Happy to drink it if someone else is ordering but not my go-to beverage <br/>
              <input type="radio" name='q5' onClick={(e)=>this.track(e)}  value='Rarely drink the stuff'/>Rarely drink the stuff <br/>
              <input type="radio" name='q5' onClick={(e)=>this.track(e)}  value='Have a few favorite varietals and can order them with confidence'/>Have a few favorite varietals and can order them with confidence<br/>
              <input type="radio" name='q5' onClick={(e)=>this.track(e)}  value='Have a very well-developed palate (in my humble opinion) & my friends see me as the wine expert'/>Have a very well-developed palate (in my humble opinion) & my friends see me as the wine expert<br/>
          </div>
          <div className='questionDIv'>
              <p>6. Of the below, which describes your favorite scent? </p>
              <input type="radio" name='q6' onClick={(e)=>this.track(e)}  value='Woody, earthy'/>Woody, earthy <br/>
              <input type="radio" name='q6' onClick={(e)=>this.track(e)}  value='Caramel, chocolate'/>Caramel, chocolate <br/>
              <input type="radio" name='q6' onClick={(e)=>this.track(e)}  value='Floral, fruity'/>Floral, fruity<br/>
              <input type="radio" name='q6' onClick={(e)=>this.track(e)}  value='Grassy, herbal'/>Grassy, herbal<br/>
          </div>
          <div className='questionDIv'>
              <p>7. What type of fruit do you prefer? </p>
              <input type="radio" name='q7' onClick={(e)=>this.track(e)}  value='Soft red fruits like strawberries, cherries or raspberries'/>Soft red fruits like strawberries, cherries or raspberries <br/>
              <input type="radio" name='q7' onClick={(e)=>this.track(e)}  value='Citrus fruits like oranges and grapefruit'/>Citrus fruits like oranges and grapefruit <br/>
              <input type="radio" name='q7' onClick={(e)=>this.track(e)}  value='Darker red fruits like plums, blueberries or black currents'/>Darker red fruits like plums, blueberries or black currents<br/>
              <input type="radio" name='q7' onClick={(e)=>this.track(e)}  value='Peaches, pears or pineapple'/>Peaches, pears or pineapple<br/>
          </div>
          <div className='questionDIv'>
              <p>8. For you tea drinkers out there, what kind do you prefer? </p>
              <input type="radio" name='q8' onClick={(e)=>this.track(e)}  value='Bold or spicy teas such as Masala Chai, Ceylon or Assam'/>Bold or spicy teas such as Masala Chai, Ceylon or Assam <br/>
              <input type="radio" name='q8' onClick={(e)=>this.track(e)}  value='Sweet tea (like Lipton with sweetener)'/>Sweet tea (like Lipton with sweetener) <br/>
              <input type="radio" name='q8' onClick={(e)=>this.track(e)}  value='Herbal, fruity or green teas'/>Herbal, fruity or green teas<br/>
              <input type="radio" name='q8' onClick={(e)=>this.track(e)}  value='Black teas like Darjeeling or Earl Grey'/>Black teas like Darjeeling or Earl Grey<br/>
          </div>   <div className='questionDIv'>
              <p>9. Which of these cheeses do you like the most? </p>
              <input type="radio" name='q9' onClick={(e)=>this.track(e)}  value='Strong cheeses like aged gouda or blue cheese (stilton, roquefort or cabrales)'/>Strong cheeses like aged gouda or blue cheese (stilton, roquefort or cabrales) <br/>
              <input type="radio" name='q9' onClick={(e)=>this.track(e)}  value='Bold cheeses like parmigiano reggiano, fontina and aged cheddar'/>Bold cheeses like parmigiano reggiano, fontina and aged cheddar <br/>
              <input type="radio" name='q9' onClick={(e)=>this.track(e)}  value='Medium soft to semi soft cheeses including cheddar, munster or camembert'/>Medium soft to semi soft cheeses including cheddar, munster or camembert<br/>
              <input type="radio" name='q9' onClick={(e)=>this.track(e)}  value='Mild cheese such as American, brie or goat cheese'/>Mild cheese such as American, brie or goat cheese<br/>
          </div>
          <div className='questionDIv'>
              <p>10. Which of these would you choose for your last meal? </p>
              <input type="radio" name='q10' onClick={(e)=>this.track(e)}  value='Spicy dishes like smoky BBQ, curries and meats/veggies with spicy chili sauces'/>Spicy dishes like smoky BBQ, curries and meats/veggies with spicy chili sauces <br/>
              <input type="radio" name='q10' onClick={(e)=>this.track(e)}  value='Lightly spiced chicken, flaky white fish and/or veggie dishes'/>Lightly spiced chicken, flaky white fish and/or veggie dishes <br/>
              <input type="radio" name='q10' onClick={(e)=>this.track(e)}  value='Hearty fare such as grilled steak, lamb or pasta with marinara'/>Hearty fare such as grilled steak, lamb or pasta with marinara<br/>
              <input type="radio" name='q10' onClick={(e)=>this.track(e)}  value='Savory dishes like cheeses, salads, ceviche, grilled salmon'/>Savory dishes like cheeses, salads, ceviche, grilled salmon<br/>
          </div>
          <div className='questionDIv'>
              <p>11. If you could travel to any of the wine producing regions below, which would you visit? </p>
              <input type="radio" name='q11' onClick={(e)=>this.track(e)}  value='Argentina'/>Argentina <br/>
              <input type="radio" name='q11' onClick={(e)=>this.track(e)}  value='France and Italy'/>France and Italy <br/>
              <input type="radio" name='q11' onClick={(e)=>this.track(e)}  value='Oregon, California and Washington'/>Oregon, California and Washington<br/>
              <input type="radio" name='q11' onClick={(e)=>this.track(e)}  value='New Zealand and Australia'/>New Zealand and Australia<br/>
          </div>
          <div className='questionDIv'>
              <p>12. How would you describe your sense of adventure? </p>
              <input type="radio" name='q12' onClick={(e)=>this.track(e)}  value='Limited: I like to get in a groove and stick with it'/>Limited: I like to get in a groove and stick with it <br/>
              <input type="radio" name='q12' onClick={(e)=>this.track(e)}  value='Well developed: I love trying new things, going new places & trying all kinds of food/drink'/>Well developed: I love trying new things, going new places & trying all kinds of food/drink <br/>
              <input type="radio" name='q12' onClick={(e)=>this.track(e)}  value='Moderate: I’ll try new things occasionally but nothing too radical'/>Moderate: I’ll try new things occasionally but nothing too radical<br/>
              <input type="radio" name='q12' onClick={(e)=>this.track(e)}  value='Extreme: I like extreme sports, high adventure and am afraid of nothing'/>Extreme: I like extreme sports, high adventure and am afraid of nothing<br/>
          </div>
          <div className='questionDIv'>
              <p>13. What’s your favorite type of chocolate? </p>
              <input type="radio" name='q13' onClick={(e)=>this.track(e)}  value='I must have dark chocolate'/>I must have dark chocolate <br/>
              <input type="radio" name='q13' onClick={(e)=>this.track(e)}  value='I prefer vanilla to chocolate'/>I prefer vanilla to chocolate <br/>
              <input type="radio" name='q13' onClick={(e)=>this.track(e)}  value='Give me extreme dark chocolate or cacao'/>Give me extreme dark chocolate or cacao<br/>
              <input type="radio" name='q13' onClick={(e)=>this.track(e)}  value='I really like milk chocolate'/>I really like milk chocolate<br/>
          </div>
          <div className='questionDIv'>
              <p>14. Let’s talk about beer - what kind do you like the most? </p>
              <input type="radio" name='q14' onClick={(e)=>this.track(e)}  value='Hefeweizens or Wits (unfiltered wheat beer with hints of citrus and spice) such as Widmer Hefeweizen, Blue Moon or Sam Adams White Ale'/>Hefeweizens or Wits (unfiltered wheat beer with hints of citrus and spice) such as Widmer Hefeweizen, Blue Moon or Sam Adams White Ale <br/>
              <input type="radio" name='q14' onClick={(e)=>this.track(e)}  value='Porters or Dry Stouts (darker colored beers with deep malt and a roasted flavor) such as Anchor Porter, Fullers London Porter or Guinness'/>Porters or Dry Stouts (darker colored beers with deep malt and a roasted flavor) such as Anchor Porter, Fullers London Porter or Guinness <br/>
              <input type="radio" name='q14' onClick={(e)=>this.track(e)}  value='American pilsners (pale in color and thinner bodied) like PBR, Coors, Bud or Rolling Rock'/>American pilsners (pale in color and thinner bodied) like PBR, Coors, Bud or Rolling Rock<br/>
              <input type="radio" name='q14' onClick={(e)=>this.track(e)}  value='Pale Ales or India Pale Ales (typically a balance of smooth malt flavors with bright hops) think Abita Jackomo, Fat Tire or Sierra Nevada Pala Ale'/>Pale Ales or India Pale Ales (typically a balance of smooth malt flavors with bright hops) think Abita Jackomo, Fat Tire or Sierra Nevada Pala Ale<br/>
          </div>
          <div className='questionDIv'>
              <p>15. How about coffee? If you were to go to Starbucks, what type of drip coffee would you order? </p>
              <input type="radio" name='q15' onClick={(e)=>this.track(e)}  value='Light roasted coffee with mellow flavors and light body like Willow or Veranda blends'/>Light roasted coffee with mellow flavors and light body like Willow or Veranda blends <br/>
              <input type="radio" name='q15' onClick={(e)=>this.track(e)}  value='I am not a coffee drinker and/or I do not like Starbucks their coffees taste bitter and burnt'/>I'm not a coffee drinker and/or I don't like Starbucks, their coffees taste bitter & burnt <br/>
              <input type="radio" name='q15' onClick={(e)=>this.track(e)}  value='Medium roasted coffee with smooth and balanced flavors like House or Breakfast blend'/>Medium roasted coffee with smooth and balanced flavors like House or Breakfast blend<br/>
              <input type="radio" name='q15' onClick={(e)=>this.track(e)}  value='Bold coffee with dark roast and full body such as French, Sumatra or Espresso roast'/>Bold coffee with dark roast and full body such as French, Sumatra or Espresso roast<br/>
          </div>

        <button onClick={() => this.onSubmit()}>Submit</button>
      </div>

    );
  }
}

export default App;
