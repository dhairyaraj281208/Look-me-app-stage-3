import React from 'react'
import { Image, View } from 'react-native';

const Filter7 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition,
        noseBasePosition
    }
}) => {
    const filtersWidth = faceWidth 
    const filtersHeight = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) /
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => angleRad * 180 / Math.PI
    
    return (
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - filtersWidth * 0.675,
            top: leftEyePosition.y - filtersHeight * 0.5 - 120
        }}>
            <Image
                source={require('../assets/other-pic1.png')}
                style={{
                    width: filtersWidth,
                    height: filtersHeight,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter7