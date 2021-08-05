import { observer } from 'mobx-react-lite';
import React, { useContext, useRef, useState } from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import SignatureCanvas from 'react-signature-canvas';
import { RootStoreContext } from '../../../../app/stores/rootStore';

const sigPadStyles = {
  border: 'dashed 3px',
  borderColor: '#eee',
  borderRadius: '5px',
  padding: '3px',
  marginBottom: '3px',
  display: 'flex',
};


const WriteSignature = () => {
    const rootStore = useContext(RootStoreContext);
    const { setSignature } = rootStore.userStore;

    const [clearButton, setClearButton] = useState(false);

    const sigCanvas = useRef<any>({});

    const getSignature = () => {
      setSignature(
        sigCanvas.current.getTrimmedCanvas().toBlob((blob: any) => {
          setSignature(blob);
        }, 'image/png')
      );

      setClearButton(true);
    };

    return (
      <Grid>
        <Grid.Column width={16}>
          <Header color="teal" sub content="Write signature" />
          <div style={sigPadStyles}>
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{
                className: 'signatureCanvas',
              }}
              onEnd={() => getSignature()}
            />
          </div>

          {clearButton && (
            <Button
              type="button"
              floated="left"
              icon="close"
              content="Clear"
              onClick={() => {
                sigCanvas.current.clear();
                setClearButton(false);
              }}
            />
          )}
        </Grid.Column>
      </Grid>
    );
}

export default observer(WriteSignature)
