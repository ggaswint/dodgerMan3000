import { Audio } from 'expo-av'

const soundObjects = {}

class Player {
  static load(library) {
    const promisedSoundObjects = []

    for (const name in library) {
      const sound = library[name]
      soundObjects[name] = new Audio.Sound()

      promisedSoundObjects.push(
        soundObjects[name].loadAsync(sound)
      )
    }

    return promisedSoundObjects
  }

  static async playSound(name) {
    try {
      if (soundObjects[name]) {
        await soundObjects[name].replayAsync()
      }
    } catch (error) {
      console.warn(error)
    }
  }

  static async loopSound(name) {
    try {
      if (soundObjects[name]) {
        soundObjects[name].setIsLoopingAsync(true)
        soundObjects[name].setVolumeAsync(1.0)
        await soundObjects[name].replayAsync()
      }
    } catch (error) {
      console.warn(error)
    }
  }

  static async pauseSound(name) {
    try {
      if (soundObjects[name]) {
        await soundObjects[name].pauseAsync()
      }
    } catch (error) {
      console.warn(error)
    }
  }
}

export default Player