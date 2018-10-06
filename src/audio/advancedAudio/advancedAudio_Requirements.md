# Advanced Audio Requirements

###### *What does* AdvancedAudio *mean?*

AdvancedAudio is a new approach binding the audio output occurring
during sessions to the text messages occurring during the session already.


### The requirements for this Update are:

* The existing Moan Loop will be replaced by randomly created **Tease notifications**
These are newly created and not yet used messages and can be found under src/game/texts for now.

  `(E.g. So every moan from now on should have a regarding moan text message.)`
 
  An efficient binding mechanism has yet to be found.
  `Maybe simple name linking. Or generation of a unique hash out of the unique names.
  Filenames would be the exact text of the message. 73avF6K_male_MrInstructor could be a proper file name. Instead of ` You're&nbsp;doing&nbsp;great_male_MrInstructor

* This Update prepares the game for the possibility to attract female Users!
New text messages have to be created for that sake, but afterwards, the creation process shall be possible.

* Some kind of application enabling the creation of the big amount of mp3 audio Files will be necessary.
 
  Sound Sets should be creatable with that application. Thinking of the following:
  * A user (male or female) can:
     * Specify a unique name
     * select their gender
     * adjust their microphone by directly testing and replaying a short (5s) recordable sample
  * Afterwards the User will be warned that the time required for recording is about 30 mins and break and continue is not possible later.
  * Now the user will be guided through **&nbsp;A&nbsp;L&nbsp;L&nbsp;** Text fields category by category.
  `(E.g.: for orgasm, the user will have to record sound samples for all randomly appearing orgasm messages)`
  * The created files will automatically be labelled in a way it is possible to import them easy in the game.
 


* After manual adding and reviewing the audio files to the game, It shall be possible to select the Instructor by the unique name.
E.g.:
  * `MrExample (male)`
  * `MsExample (female)`
 
  Maybe Unicode Icon instead of male/female may be displayed if supported in all Browsers.
 
* If a text message is getting changed, MrExample and MsExample don't want to start over from scratch. Updating of outdated presets shall be made possible.
Some kind of recognition what files are already there, and what files are still missing.

* It shall be possible to choose one or even multiple Instructors.
If no Instructor is chosen, the preset for the male fapinstructor game shall consist of random female Instructors.
Vice versa for the female fapinstructor game.

* Every displayed text message now shall call the responding audio call.
`(E.g.: "You're doing great!" Text shall pop up as the identical audio is being played.)`

  **IMPORTANT NOTE**: As sometimes not only one but multiple instructions may arise, it is critical to build some kind of audio stack
where the audio messages are played one after another or instantly if the stack is empty.
 
  