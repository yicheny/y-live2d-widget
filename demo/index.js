import React,{useEffect} from 'react'
import {render} from 'react-dom'
import {L2Dwidget} from "../entry/src";
import './index.scss';


const App = ()=>{
    return <div>
        APP
    </div>
};

render(<App/>, document.querySelector('#app'));

L2Dwidget.init({
    dialog: {
        enable: true,
        script: {
            'every idle 10s': '开始工作吧！',
            'tap body': '哎呀！别碰我！',
            'tap face': '人家已经不是小孩子了~'
        }
    }
});
