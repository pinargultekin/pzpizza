

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Pizzas, Pastas, Salads } from "../../Menudata/Ingredients";
import Menu from "../../Menudata/menu";



function NonMeatList(props) {
  // const [{ itemVegieTop: pizzaVegTop },
  //   { itemVegieTop: pastaVegTop },
  //   { itemVegieTop: saladVegTop }] = menu;
  // const [pzvt1, pzvt2, pzvt3, pzvt4, pzvt5, pzvt6, pzvt7, pzvt8, pzvt9, pzvt10, pzvt11, pzvt12, pzvt13, pzvt14, pzvt15] = pizzaVegTop;
  // const [psvt1, psvt2, psvt3, psvt4, psvt5, psvt6, psvt7, psvt8, psvt9, psvt10, psvt11, psvt12] = pastaVegTop;
  // const [sdvt1, sdvt2, sdvt3, sdvt4, sdvt5, sdvt6, sdvt7, sdvt8, sdvt9, sdvt10, sdvt11, sdvt12, sdvt13, sdvt14, sdvt15, sdvt16, sdvt17, sdvt18, sdvt19, sdvt20, sdvt21, sdvt22, sdvt23, sdvt24] = saladVegTop;

  const pizzaVegTop = Menu[0].itemVegieTop;
  const pastaVegTop = Menu[1].itemVegieTop;
  const saladVegTop = Menu[2].itemVegieTop;





  const itemIngre = props.ingredients;
  const intersecPz = itemIngre.filter(element => pizzaVegTop.includes(element))
  const intersecPs = itemIngre.filter(element => pastaVegTop.includes(element))
  const intersecSd = itemIngre.filter(element => saladVegTop.includes(element))
  const allIntersec = [intersecPz, intersecPs, intersecSd]

  console.log(intersecPz)




  return (<Form className="ckList">
    <Form.Group>
      {/* Pizza */}
      {pizzaVegTop.map(item => {
        return (<Form.Check checked={intersecPz.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
      {/* Pasta */}
      {pastaVegTop.map(item => {
        return (<Form.Check checked={intersecPs.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
      {/* Salad */}
      {saladVegTop.map(item => {
        return (<Form.Check checked={intersecSd.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}

    </Form.Group>
  </Form>

  )
}
export default NonMeatList;

// Notes for next steps 
// onCheck handler ekledim oncelden check edilmis box icin ilk basta calisti sonradan problem yasadim, 
// next step olarak check on cehck olayina bakabilirsek guzel olur!
//  en olmadi sadece create your own pizzaya checkleri koyarix sadece, custom pizzalari oyle cozmus oluruz








// import React, { useState } from "react";
// import { Form } from "react-bootstrap";
// import menu from "../../Menudata/menu";


// function NonMeatList(props) {
//   const header = props.header;
//   const [{ itemVegieTop: pizzaVegTop },
//     { itemVegieTop: pastaVegTop },
//     { itemVegieTop: saladVegTop }] = menu;
//   const [pzvt1, pzvt2, pzvt3, pzvt4, pzvt5, pzvt6, pzvt7, pzvt8, pzvt9, pzvt10, pzvt11, pzvt12, pzvt13, pzvt14, pzvt15] = pizzaVegTop;
//   const [psvt1, psvt2, psvt3, psvt4, psvt5, psvt6, psvt7, psvt8, psvt9, psvt10, psvt11, psvt12] = pastaVegTop;
//   const [sdvt1, sdvt2, sdvt3, sdvt4, sdvt5, sdvt6, sdvt7, sdvt8, sdvt9, sdvt10, sdvt11, sdvt12, sdvt13, sdvt14, sdvt15, sdvt16, sdvt17, sdvt18, sdvt19, sdvt20, sdvt21, sdvt22, sdvt23, sdvt24] = saladVegTop;


//   const itemIngre = props.ingredients;
//   const intersecPz = itemIngre.filter(element => pizzaVegTop.includes(element))
//   const intersecPs = itemIngre.filter(element => pastaVegTop.includes(element))
//   const intersecSd = itemIngre.filter(element => saladVegTop.includes(element))
//   const allIntersec = [intersecPz, intersecPs, intersecSd]

//   const [check, setCheck] = useState(false)

//   function handleCheck() {

//   }


//   return (<Form className="ckList">
//     {
//       //! LATER UPDATE: use for loop

//       header === "Pizza" ?
//     <Form.Group >
//       <Form.Check className="mtcheckbox" value={pzvt1} type="checkbox" label={pzvt1} />
//       <Form.Check className="mtcheckbox" value={pzvt2} type="checkbox" label={pzvt2} />
//       <Form.Check className="mtcheckbox" value={pzvt3} type="checkbox" label={pzvt3} />
//       <Form.Check className="mtcheckbox" value={pzvt4} type="checkbox" label={pzvt4} />
//       <Form.Check className="mtcheckbox" value={pzvt5} type="checkbox" label={pzvt5} />
//       <Form.Check className="mtcheckbox" value={pzvt6} type="checkbox" label={pzvt6} />
//       <Form.Check className="mtcheckbox" value={pzvt7} type="checkbox" label={pzvt7} />
//       <Form.Check className="mtcheckbox" value={pzvt8} type="checkbox" label={pzvt8} />
//       <Form.Check className="mtcheckbox" value={pzvt9} type="checkbox" label={pzvt9} />
//       <Form.Check className="mtcheckbox" value={pzvt10} type="checkbox" label={pzvt10} />
//       <Form.Check className="mtcheckbox" value={pzvt11} type="checkbox" label={pzvt11} />
//       <Form.Check className="mtcheckbox" value={pzvt12} type="checkbox" label={pzvt12} />
//       <Form.Check className="mtcheckbox" value={pzvt13} type="checkbox" label={pzvt13} />
//       <Form.Check className="mtcheckbox" value={pzvt14} type="checkbox" label={pzvt14} />
//       <Form.Check className="mtcheckbox" value={pzvt15} type="checkbox" label={pzvt15} />
//     </Form.Group>
//         : header === "Pasta" ?
//     <Form.Group >
//       <Form.Check className="mtcheckbox" value={psvt1} type="checkbox" label={psvt1} />
//       <Form.Check className="mtcheckbox" value={psvt2} type="checkbox" label={psvt2} />
//       <Form.Check className="mtcheckbox" value={psvt3} type="checkbox" label={psvt3} />
//       <Form.Check className="mtcheckbox" value={psvt4} type="checkbox" label={psvt4} />
//       <Form.Check className="mtcheckbox" value={psvt5} type="checkbox" label={psvt5} />
//       <Form.Check className="mtcheckbox" value={psvt6} type="checkbox" label={psvt6} />
//       <Form.Check className="mtcheckbox" value={psvt7} type="checkbox" label={psvt7} />
//       <Form.Check className="mtcheckbox" value={psvt8} type="checkbox" label={psvt8} />
//       <Form.Check className="mtcheckbox" value={psvt9} type="checkbox" label={psvt9} />
//       <Form.Check className="mtcheckbox" value={psvt10} type="checkbox" label={psvt10} />
//       <Form.Check className="mtcheckbox" value={psvt11} type="checkbox" label={psvt11} />
//       <Form.Check className="mtcheckbox" value={psvt12} type="checkbox" label={psvt12} />
//     </Form.Group>
//           :
//     <Form.Group >
//       <Form.Check className="mtcheckbox" value={sdvt1} type="checkbox" label={sdvt1} />
//       <Form.Check className="mtcheckbox" value={sdvt2} type="checkbox" label={sdvt2} />
//       <Form.Check className="mtcheckbox" value={sdvt3} type="checkbox" label={sdvt3} />
//       <Form.Check className="mtcheckbox" value={sdvt4} type="checkbox" label={sdvt4} />
//       <Form.Check className="mtcheckbox" value={sdvt5} type="checkbox" label={sdvt5} />
//       <Form.Check className="mtcheckbox" value={sdvt6} type="checkbox" label={sdvt6} />
//       <Form.Check className="mtcheckbox" value={sdvt7} type="checkbox" label={sdvt7} />
//       <Form.Check className="mtcheckbox" value={sdvt8} type="checkbox" label={sdvt8} />
//       <Form.Check className="mtcheckbox" value={sdvt9} type="checkbox" label={sdvt9} />
//       <Form.Check className="mtcheckbox" value={sdvt10} type="checkbox" label={sdvt10} />
//       <Form.Check className="mtcheckbox" value={sdvt11} type="checkbox" label={sdvt11} />
//       <Form.Check className="mtcheckbox" value={sdvt12} type="checkbox" label={sdvt12} />
//       <Form.Check className="mtcheckbox" value={sdvt13} type="checkbox" label={sdvt13} />
//       <Form.Check className="mtcheckbox" value={sdvt14} type="checkbox" label={sdvt14} />
//       <Form.Check className="mtcheckbox" value={sdvt15} type="checkbox" label={sdvt15} />
//       <Form.Check className="mtcheckbox" value={sdvt16} type="checkbox" label={sdvt16} />
//       <Form.Check className="mtcheckbox" value={sdvt17} type="checkbox" label={sdvt17} />
//       <Form.Check className="mtcheckbox" value={sdvt18} type="checkbox" label={sdvt18} />
//       <Form.Check className="mtcheckbox" value={sdvt19} type="checkbox" label={sdvt19} />
//       <Form.Check className="mtcheckbox" value={sdvt20} type="checkbox" label={sdvt20} />
//       <Form.Check className="mtcheckbox" value={sdvt21} type="checkbox" label={sdvt21} />
//       <Form.Check className="mtcheckbox" value={sdvt22} type="checkbox" label={sdvt22} />
//       <Form.Check className="mtcheckbox" value={sdvt23} type="checkbox" label={sdvt23} />
//       <Form.Check className="mtcheckbox" value={sdvt24} type="checkbox" label={sdvt24} />
//     </Form.Group>
//     }
//   </Form>

//   )
// }
// export default NonMeatList;


