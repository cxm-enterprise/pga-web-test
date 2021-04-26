import React from "react";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import IcoButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Print from "@material-ui/icons/PrintRounded";

export default function Detail() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box display="block" width="100%" borderRadius="borderRadius">
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-center"
            width="100%"
          >
            <Box marginTop={2}>
              <Typography> Nombre Cliente </Typography>
            </Box>
            <Box marginLeft="auto" marginRight={1} marginTop={2}>
              <Typography>RD800</Typography>
            </Box>
            <IcoButton color="primary">
              <Print titleAccess="Imprimir" fontSize="large" />
            </IcoButton>
          </Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box display="block" borderTop={1} padding={2} width="100%">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Box display="flex" flexDirection="row" width="100%">
            <Box marginTop={2}>
              <Typography> Nombre Cliente </Typography>
            </Box>
            <Box marginLeft="auto" marginRight={1} marginTop={2}>
              <Typography>RD800</Typography>
            </Box>
            <IcoButton color="primary">
              <Print titleAccess="Imprimir" fontSize="large" />
            </IcoButton>
          </Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box display="block" borderTop={1} padding={2} width="100%">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Box display="flex" flexDirection="row" width="100%">
            <Box marginTop={2}>
              <Typography> Nombre Cliente </Typography>
            </Box>
            <Box marginLeft="auto" marginRight={1} marginTop={2}>
              <Typography>RD800</Typography>
            </Box>
            <IcoButton color="primary">
              <Print titleAccess="Imprimir" fontSize="large" />
            </IcoButton>
          </Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box display="block" borderTop={1} padding={2} width="100%">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Box display="flex" flexDirection="row" width="100%">
            <Box marginTop={2}>
              <Typography> Nombre Cliente </Typography>
            </Box>
            <Box marginLeft="auto" marginRight={1} marginTop={2}>
              <Typography>RD800</Typography>
            </Box>
            <IcoButton color="primary">
              <Print titleAccess="Imprimir" fontSize="large" />
            </IcoButton>
          </Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box display="block" borderTop={1} padding={2} width="100%">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography>Tipo de Dato</Typography>
              <Typography>valor.</Typography>
            </Box>

            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  );
}
