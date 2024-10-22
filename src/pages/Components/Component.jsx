
import Counter from './Counter/counter.jsx'
import Timer from './Timer/Timer.jsx'
import Add from './Add/Add.jsx'
import Temperature from './Temperature/Temperature.jsx'

import './Component.css'

function Component() {
    return ( <div className="App-con">
        
       <div className="content">
       <div className='item1'>
       <Counter name = "Katawut" value = {5}/>
       <Timer/>
       </div>
       
       <div className='item2'><Add/></div>
       <div className='item3'><Temperature/></div>
       </div>
    </div> );
}

export default Component;