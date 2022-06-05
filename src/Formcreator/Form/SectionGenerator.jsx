import React, { useEffect, useState, useMemo } from "react";
import { Grid, Box } from "@mui/material";
import "./Form.css";
import Buttons from "./Buttons";
import GenerateInputs from "./GenerateInputs";

export default function Section({
  getData,
  content,
  sizeLimit,
  defaultValues,
  divisionLine = false,
  dynamic = true,
}) {
  const inputs = useMemo(
    () => Object.fromEntries(content.map((itm) => [itm.name, ""])),
    [content]
  );

  const [contents, setContents] = useState([]);
  const [inputValues, setInputValues] = useState([]);

  const handleInputs = (e, name, index) => {
    setInputValues((v) => {
      let value = [...v];
      value[index][name] = e;
      return value;
    });
  };

  const AddContent = (defVals=null) => {
    setInputValues((v) => [...v, { ...inputs }]);
    setContents((v) => {
      return [
        ...v,
        <Grid container pt={0} columnSpacing={2} key={v.length}>
          <GenerateInputs
            content={content}
            index={v.length}
            inputHandler={handleInputs}
            values={defVals}
          />
          {divisionLine && (
            <Grid item xs={12}>
              <Box pt={1} className="line"></Box>
            </Grid>
          )}
        </Grid>,
      ];
    });
  };

  const RemoveContent = () => {
    setInputValues((v) => v.filter((vl, i) => i !== v.length - 1));
    setContents((v) => v.filter((vl, i) => i !== v.length - 1));
  };

  // useEffect(() => {
  //   setInputValues([]);
  //   setContents([]);
	// 	if (!dynamic) {
	// 		AddContent(defaultValues);
	// 	}
	// 	if (dynamic && defaultValues) {
	// 		defaultValues.forEach((v) => {
	// 			AddContent(v);
	// 		});
	// 	}
	// }, [defaultValues]);

  useEffect(() => {
    getData(inputValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);

  useEffect(() => {
    if (!dynamic && contents.length === 0) {
      AddContent(defaultValues);
      return;
    }
    if (dynamic && defaultValues){
      defaultValues.forEach((v) => {
        AddContent(v);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {contents}
      {dynamic && (
        <Buttons
          removeClbck={RemoveContent}
          addClbck={AddContent}
          addButton={sizeLimit ? contents.length < sizeLimit : true}
          removeButton={contents.length > 0}
        />
      )}
    </>
  );
}
