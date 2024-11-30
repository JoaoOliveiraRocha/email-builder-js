import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { resetDocument } from '../../../documents/editor/EditorContext';
import { BLACK600 } from '../../../new-theme';
import { contentPrimary, contentSuccess } from '../../../topper-theme';

import validateJsonStringValue from './validateJsonStringValue';

const DROP_TARGET_ID = 'drop-target-id';

type ImportJsonDialogProps = {
  onClose: () => void;
};

export default function ImportJsonDialog({ onClose }: ImportJsonDialogProps) {
  const dropZoneRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (ev) => {
    const v = ev.currentTarget.value;
    setValue(v);
    const { error } = validateJsonStringValue(v);
    setError(error ?? null);
  };

  let errorAlert = null;
  if (error) {
    errorAlert = <Alert color="error">{error}</Alert>;
  }


  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    // check if is right div
    if (dropZoneRef.current && !dropZoneRef.current.contains(event.target as Node)) {
      return;
    }

    const files = event.dataTransfer?.files;

    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        if (file.type === 'application/json') {
          const reader = new FileReader();
          reader.onload = () => {
            try {
              const content = JSON.parse(reader.result as string);
              console.log('JSON File Content: ');
              console.log(content);


              // console.log(error);
              // setError(error ?? null);
              // if (!data) {
              //   return;
              // }
              setValue(JSON.stringify(content));
              resetDocument(content);
              onClose();

              // handleChange(content);
            } catch (error) {

              // "i'm getting invalid JSON for some reason"
              //TODO: Error handling
              // const { error, data } = validateJsonStringValue(content);
              console.error('Error parsing JSON:', error);
            }
          };
          reader.onerror = () => {
            console.error('Error reading file:', reader.error);
          };
          reader.readAsText(file);
        } else {
          console.warn(`Unsupported file type: ${file.type}`);
        }
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('dragover', onDragOver as EventListener);
    window.addEventListener('dragleave', onDragLeave as EventListener);
    window.addEventListener('drop', onDrop as EventListener);

    return () => {
      window.removeEventListener('dragover', onDragOver as EventListener);
      window.removeEventListener('dragleave', onDragLeave as EventListener);
      window.removeEventListener('drop', onDrop as EventListener);
    };
  }, [onDragOver, onDragLeave, onDrop]);

  return (
    <Dialog open onClose={onClose}
    ref={dropZoneRef}
    >
      <DialogTitle>Import JSON</DialogTitle>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const { error, data } = validateJsonStringValue(value);
          setError(error ?? null);
          if (!data) {
            return;
          }
          console.log(data);
          resetDocument(data);
          onClose();
        }}
      >
        <DialogContent>
          <Typography color="text.secondary" paragraph>
            Copy and paste an EmailBuilder.js JSON
          </Typography>
          {errorAlert}
            {isDragging ?
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', 
                  borderRadius: '4px',
                  border: `2px ridge ${contentSuccess}`,
                  height: '233px',
                  background: contentPrimary,
                }}>
              <Typography variant="h3" sx={{ color: BLACK600, textAlign: 'center' }}>
                Drag JSON file here
              </Typography>
              </div>
              <Typography variant="body1" sx={{fontSize: '12px',  lineHeight: '18px', margin: '3px 14px 0px'}}>
              This will override your current template.
              </Typography>
            </>
            :
            <TextField
            error={error !== null}
            value={value}
            onChange={handleChange}
            type="text"
            helperText="This will override your current template."
            variant="outlined"
            placeholder='Drag file / Paste JSON content here'
            fullWidth
            rows={10}
            multiline
            ></TextField> 
          }
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" disabled={error !== null}>
            Import
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
