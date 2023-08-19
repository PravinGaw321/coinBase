import React, { useEffect } from "react";
import './Nft.css';
import { useDispatch, useSelector } from "react-redux";
import { FetchNftdata } from "../../redux/NftReducer";

const Nft=()=>{
    const dispatch = useDispatch();

    const {nftloader, nftdata, nfterror} = useSelector((state)=> state.nft);
    console.log('nftloader', nftdata);

    useEffect(()=>{
        dispatch(FetchNftdata());
    }, [dispatch])

    return(
        <React.Fragment>
            <div>nft section</div>
        </React.Fragment>
    )
}

export default Nft;