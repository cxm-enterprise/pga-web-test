import React, { Fragment, useState } from "react";
import List from "@material-ui/icons/ListOutlined";
import IconButton from "@material-ui/core/IconButton";
import Cart from "@material-ui/icons/ViewComfy";
import Drawer from "@material-ui/core/Drawer";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Aside from "../../components/Aside";
import Anno from "./partials/Anno";
import Ventas from "./partials/Ventas";
import Clientes from "./partials/Clientes";
import OrderBy from './partials/OrderBy'

export default function Header({
  showSelect1,
  showSelect2,
  handleVistaLista,
  handleVistaCarta,
}) {
  const [state, setState] = useState({
    left: false,
  });
  const [toggle, setToggle] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setToggle(!toggle)
  };
  const {anchor} = setState
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between shadow w-100 h-25 px-3 py-2">
      <div className="d-block d-sm-block d-md-flex">
        <Fragment>
          <IconButton color="primary" onClick={toggleDrawer(anchor, true)} className="btn btn-outline-primary">
          { 
            toggle ? 
              <KeyboardArrowRightIcon titleAccess="Cerrar Filtros" fontSize="large" />
              : 
              <KeyboardArrowLeftIcon titleAccess="Abrir Filtros" fontSize="large" /> 
          }
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Aside/>
          </Drawer>
        </Fragment>
        <div className="d-sm-block d-md-flex">
            { showSelect1 && 
              <div className="d-flex">
                <Anno />  
                <div className="d-none d-sm-none d-md-flex p-0">
                  <IconButton>
                    /
                  </IconButton>
                </div>
             </div>
            } 
            { showSelect2 && 
              <div className="d-flex">
                <Ventas /> 
                <div className="d-none d-sm-none d-md-flex">
                  <IconButton>
                    /
                  </IconButton>
                </div>
              </div>
            }
             
          <div>
            {showSelect2 && <Clientes />}
            </div> 
        </div> 
      </div>
      <div className="d-sm-block d-md-flex justify-content-center align-contentmd-sm-end align-contentmd-md-center ml-auto">
          <IconButton color="primary" onClick={handleVistaLista}>
            <List titleAccess="Vista de Lista" fontSize="large" />
          </IconButton>
          <IconButton color="primary" onClick={handleVistaCarta}>
            <Cart titleAccess="Vista de Carta" fontSize="large" />
          </IconButton>    
          {showSelect2 && <OrderBy/>}    
      </div>      
    </div>
  );
}

