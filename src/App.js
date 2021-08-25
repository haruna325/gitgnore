import React, { useState } from "react";
// import PropTypes from 'prop-types'


// class App extends Component {
//   constructor(props) {
//     super(props)
//       this.state = {
//         count: 0
//       }
//     }
//   render() {
//     const tasks = [
//       { id: 1, title: "one" },
//       { id: 2, title: "two" },
//       { id: 3, title: "three" },
//       { id: 4, title: "four" },
//       { id: 5, title: "five" }
//     ];
//     //tasks配列から偶数だけ取り出す
//     const gusu = tasks.filter((val) => { return val.id % 2 !== 0 })
//     //取り出した偶数配列だけを利用する
//     const num = gusu.map((val, index) => {
//       return <div key={val.id}>IDは{val.id}、Titleは{val.title}、indexは{index}</div>
//     })
//     let isMorning = true
//     // 関数４
//     function Greeting() {
//       if (isMorning) {
//         return <span>おはよう</span>
//       } else {
//         return <span>こんにちは</span>
//       }
//     }
    
//     return <div>
//       <p>現在の数字は{this.state.count}です</p>
//       <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
//       <button onClick={() => this.setState({count: this.state.count - 1})}>-1</button>
//       <button onClick={() => this.setState({count: 0})}>0</button>
//       <div>{num}</div>
//       {/* 関数１ */}
//       {(() => {
//         if (isMorning) {
//           return <span>Good Moring</span>
//         } else {
//           return <span>Hello</span>
//         }
//       })()}
//       {/* 関数２ */}
//       <div>{isMorning && <span>朝だよ</span>}</div>
//       {/* 関数３ */}
//       <div>{isMorning ? 'trueです' : 'falseです'}</div>
//       {/* 関数４ */}
//       <div><Greeting /></div>
//       <div>{this.renderWithCondition(isMorning)}</div>
//       <button onClick={() => { console.log('ボタンが押されました') }}>Click</button>
//       <div>合計:{this.get_result(3)}</div>
//     </div>
//   }

//   //関数５
//   renderWithCondition(isMorning){
//     if (isMorning) {
//       return <span>アンニョン</span>
//     } else {
//       return <span>アンニョンハセヨ</span>
//     }
//   }
//   get_result(num2){
//       return 1 + num2
//     }
// }
// const App = () => {
//   return <div>
//     <Hello/>
//     <Huga />
//     <button onClick={() => { console.log('clickされたよ') }}>Click</button>
//     </div>
// }
// const Huga = () => {
//   return <div>
//     <Hello />
//     <div>グンモーニング</div>
//     </div>
// }

// const Hello = () => {
//   return <div>Hello</div>
// }
// const Members = [
//   {name: "taro", age: 12},
//   {name: "jiro", age: 15},
//   { name: "saburo", age: 18},
//   {name: "shiro"} // ageの値が設定されていないとdefaultpropsの値が適用される
// ]

// //親コンポーネント
// //配列のデータを処理して、表示する要素に受け渡し
// const App = () => {
//   return <div>
//     {Members.map((person, index) => {
//       return  <Member key={index} name={person.name} age={person.age} />
//     })}
//   </div>
// }

// //子コンポーネント
// //データを受け取って表示する
// const Member = (props) => {
//   return <div>I'm {props.name}、age is {props.age}</div>
// }

// //デフォルトpropsの設定
// Member.defaultProps = {
//   age: 100
// }
// //型チェック
// Member.propTypes = {
//   //チェックするプロパティ:importしたPropTypes.型の名前
//   name: PropTypes.string
// }

// const App = () => {
//   const [count, setCount] = useState(0)
//   return <div>
//     <p>現在の数字は{count}です</p>
//     <button onClick={() => setCount(count => count +1)}>+1</button>
//     <button onClick={() => setCount(count -1)}>-1</button>
//     <button onClick={() => setCount(0)}>0</button>
//   </div>
// }

const App = () => {
  //todoの入れ物
  const [todos, setTodo] = useState([])
  const [title, setTask] = useState('')

  const Click = () => {
  if (title === '') {
      return　
  } else {
    setTodo(todos => [...todos, { title }])
    //入力フォームをリセット
    setTask('')
  }
}

  return <div>
    <div>TODO</div>
    <input type="text" value={title} onChange={(e) => { setTask (e.target.value) }}/>
    <button onClick={Click}>追加</button>
    <ul>
      {todos.map((item, index)=> (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  </div>
}




export default App