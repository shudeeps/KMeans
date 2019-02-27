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
                <p>2. If you were a dairy milk drinker, which would you prefer?
                </p>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='1%'/>1%<br/>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='2%'/>2%<br/>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='Whole milk'/>Whole milk<br/>
                <input type="radio" name='q2' onClick={(e)=>this.track(e)}  value='Nonfat'/>Nonfat<br/>
            </div>
          </div>

          <div className='questionDIv'>
              <p>
                  3. What are your favorite types of dessert?
              </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Citrusy desserts like key lime pie and lemon squares'/>Citrusy desserts like key lime pie and lemon squares <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Fruity pies and cakes'/>Fruity pies and cakes <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Vanilla based creams, custards and puddings'/>Vanilla based creams, custards and puddings<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Anything with chocolate, the darker the better'/>Anything with chocolate, the darker the better<br/>
          </div>   <div className='questionDIv'>
              <p>4. Do you smoke (cigarettes, cigars, whatever…)? </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='1'/>A few times a year <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='2'/>Never <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='3'/>Daily<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='4'/>A few times a week<br/>
          </div>   <div className='questionDIv'>
              <p>dfs </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Smoked'/>Smoked <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Thyme'/>Thyme <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Basil'/>Basil<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Dill'/>Dill<br/>
          </div>   <div className='questionDIv'>
              <p>5. What kind of wine drinker are you? </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='Happy to drink it if someone else is ordering but not my go-to beverage'/>Happy to drink it if someone else is ordering but not my go-to beverage <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='2'/>Thyme <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='3'/>Basil<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='4'/>Dill<br/>
          </div>   <div className='questionDIv'>
              <p>dfs </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='1'/>Smoked <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='2'/>Thyme <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='3'/>Basil<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='4'/>Dill<br/>
          </div>   <div className='questionDIv'>
              <p>dfs </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='1'/>Smoked <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='2'/>Thyme <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='3'/>Basil<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='4'/>Dill<br/>
          </div>   <div className='questionDIv'>
              <p>dfs </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='1'/>Smoked <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='2'/>Thyme <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='3'/>Basil<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='4'/>Dill<br/>
          </div>   <div className='questionDIv'>
              <p>dfs </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='1'/>Smoked <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='2'/>Thyme <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='3'/>Basil<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='4'/>Dill<br/>
          </div>   <div className='questionDIv'>
              <p>dfs </p>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='1'/>Smoked <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='2'/>Thyme <br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='3'/>Basil<br/>
              <input type="radio" name='q1' onClick={(e)=>this.track(e)}  value='4'/>Dill<br/>
          </div>

        <button onClick={() => this.onSubmit()}>Submit</button>
      </div>

    );
  }
}

export default App;
