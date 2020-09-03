import Constants from '../Utils/Constants';

export default (entities, { screen }) => {
    let player = entities.player;
    let camera = entities.camera;
    let gameScreen = entities.screen;
    const minHeight = gameScreen.height / 2.5;
    const nextHeight = gameScreen.height / 1.5;;
    const heightDiff = nextHeight - minHeight;
    let targetY = Math.abs(player.body.position.y - (gameScreen.height - 75)); // 300 is center of player when standing on floor 50 + 25

    //console.log('player' + player.body.position.y + ' height: ' + Constants.MAX_HEIGHT)
    let difference = Math.abs(targetY) - minHeight;
    if (targetY > minHeight && targetY < nextHeight && difference / 2 < camera.maxOffsetY) {
        camera.offsetY = difference / 2;
        //console.log(camera.offsetY)
    }
    if (targetY >= nextHeight && (targetY - gameScreen.height / 2) < camera.maxOffsetY) {
        camera.offsetY = difference - heightDiff / 2;
    }

    const minWidth = gameScreen.width / 2;
    let targetX = Math.abs(player.body.position.x);
    difference = Math.abs(targetX) - minWidth;

    if (targetX > minWidth && difference < camera.maxOffsetX) {
        camera.offsetX = difference;
    }

    return entities;
}