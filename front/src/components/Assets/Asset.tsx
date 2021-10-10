import React from 'react';

export interface AssetProps {
    title: string,
    logo: string,
    price: number,
}
export const Asset = (props : AssetProps):React.ReactElement => (
  <>
    <p>{props.logo}</p>
    <p>{props.title}</p>
  </>
);
