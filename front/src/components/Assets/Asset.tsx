import React from 'react';

export interface AssetProps {
    title:String,
    logo:String,
    price?:Number,
}
export const Asset = (props : AssetProps):React.ReactElement => (
  <>
    <p>{props.logo}</p>
    <p>{props.title}</p>
  </>
);