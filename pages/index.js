import Styles from "../styles/Home.module.css";
import Select from "react-select";
import {HiOutlineAdjustmentsVertical} from "react-icons/hi2";

const example=[
  {category:"nodejs",author:"mohammad",Id:1},
  {category:"reactjs",author:"mohammad",Id:2},
  {category:"vuejs",author:"mohammad",Id:3},
  {category:"nodejs",author:"mohammad",Id:4},
  {category:"reactjs",author:"mohammad",Id:5},
  {category:"vuejs",author:"mohammad",Id:6},
];
const myOptions=[
  {value:'all',label:'All'},
  {value:'react',label:'React.JS'},
  {value:'vue',label:'Vue.JS'},
  {value:'js',label:'JavaScript'}
]
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    color: state.selectProps.menuColor,
    padding: 20,
  }),
}

const Index = () => {
  return (
  <div className={Styles.postPage}>
    <nav>
      <Select options={myOptions}
        styles={customStyles}
        classNames={{
          control:(state)=>Styles.Select
        }}
        instanceId='Category'
      />
      <ul>
        <span>{<HiOutlineAdjustmentsVertical/>}</span>
        <li>sort:</li>
        <li>visited</li>
        <li>popular</li>
        <li>newest</li>
      </ul>
    </nav>
    <div className={Styles.posts}>
      {example.map((item)=>{
          return <section key={item.Id}>
        <img src={`/images/${item.category}.png`} alt={item.category}/>
        <div className={Styles.description}>
          <h5>
           this is sth {item.title}
          </h5>
          <section>
            <div>
              <span/>
              <p>{item.author}</p>
            </div>
            <p>{item.category}</p>
          </section>
        </div>
      </section>
      })}
    </div>  
  </div>
 );
};

export default Index;
