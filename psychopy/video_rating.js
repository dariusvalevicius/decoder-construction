/********************* 
 * Video_Rating *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'video_rating';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'stimuli': '999',
};

// Start code blocks for 'Before Experiment'
var video_path
var stimuli
var participant
var df
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(waiting_for_scannerRoutineBegin());
flowScheduler.add(waiting_for_scannerRoutineEachFrame());
flowScheduler.add(waiting_for_scannerRoutineEnd());
flowScheduler.add(fixation_2RoutineBegin());
flowScheduler.add(fixation_2RoutineEachFrame());
flowScheduler.add(fixation_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_run-1.csv', 'path': 'conditions_run-1.csv'},
    {'name': 'processed_run-1/bird_1.mp4', 'path': 'processed_run-1/bird_1.mp4'},
    {'name': 'processed_run-1/bird_10.mp4', 'path': 'processed_run-1/bird_10.mp4'},
    {'name': 'processed_run-1/bird_11.mp4', 'path': 'processed_run-1/bird_11.mp4'},
    {'name': 'processed_run-1/bird_12.mp4', 'path': 'processed_run-1/bird_12.mp4'},
    {'name': 'processed_run-1/bird_13.mp4', 'path': 'processed_run-1/bird_13.mp4'},
    {'name': 'processed_run-1/bird_14.mp4', 'path': 'processed_run-1/bird_14.mp4'},
    {'name': 'processed_run-1/bird_15.mp4', 'path': 'processed_run-1/bird_15.mp4'},
    {'name': 'processed_run-1/bird_16.mp4', 'path': 'processed_run-1/bird_16.mp4'},
    {'name': 'processed_run-1/bird_17.mp4', 'path': 'processed_run-1/bird_17.mp4'},
    {'name': 'processed_run-1/bird_18.mp4', 'path': 'processed_run-1/bird_18.mp4'},
    {'name': 'processed_run-1/bird_19.mp4', 'path': 'processed_run-1/bird_19.mp4'},
    {'name': 'processed_run-1/bird_2.mp4', 'path': 'processed_run-1/bird_2.mp4'},
    {'name': 'processed_run-1/bird_20.mp4', 'path': 'processed_run-1/bird_20.mp4'},
    {'name': 'processed_run-1/bird_3.mp4', 'path': 'processed_run-1/bird_3.mp4'},
    {'name': 'processed_run-1/bird_4.mp4', 'path': 'processed_run-1/bird_4.mp4'},
    {'name': 'processed_run-1/bird_5.mp4', 'path': 'processed_run-1/bird_5.mp4'},
    {'name': 'processed_run-1/bird_6.mp4', 'path': 'processed_run-1/bird_6.mp4'},
    {'name': 'processed_run-1/bird_7.mp4', 'path': 'processed_run-1/bird_7.mp4'},
    {'name': 'processed_run-1/bird_8.mp4', 'path': 'processed_run-1/bird_8.mp4'},
    {'name': 'processed_run-1/bird_9.mp4', 'path': 'processed_run-1/bird_9.mp4'},
    {'name': 'processed_run-1/caterpillar_1.mp4', 'path': 'processed_run-1/caterpillar_1.mp4'},
    {'name': 'processed_run-1/caterpillar_10.mp4', 'path': 'processed_run-1/caterpillar_10.mp4'},
    {'name': 'processed_run-1/caterpillar_11.mp4', 'path': 'processed_run-1/caterpillar_11.mp4'},
    {'name': 'processed_run-1/caterpillar_12.mp4', 'path': 'processed_run-1/caterpillar_12.mp4'},
    {'name': 'processed_run-1/caterpillar_13.mp4', 'path': 'processed_run-1/caterpillar_13.mp4'},
    {'name': 'processed_run-1/caterpillar_14.mp4', 'path': 'processed_run-1/caterpillar_14.mp4'},
    {'name': 'processed_run-1/caterpillar_15.mp4', 'path': 'processed_run-1/caterpillar_15.mp4'},
    {'name': 'processed_run-1/caterpillar_16.mp4', 'path': 'processed_run-1/caterpillar_16.mp4'},
    {'name': 'processed_run-1/caterpillar_17.mp4', 'path': 'processed_run-1/caterpillar_17.mp4'},
    {'name': 'processed_run-1/caterpillar_18.mp4', 'path': 'processed_run-1/caterpillar_18.mp4'},
    {'name': 'processed_run-1/caterpillar_19.mp4', 'path': 'processed_run-1/caterpillar_19.mp4'},
    {'name': 'processed_run-1/caterpillar_2.mp4', 'path': 'processed_run-1/caterpillar_2.mp4'},
    {'name': 'processed_run-1/caterpillar_20.mp4', 'path': 'processed_run-1/caterpillar_20.mp4'},
    {'name': 'processed_run-1/caterpillar_3.mp4', 'path': 'processed_run-1/caterpillar_3.mp4'},
    {'name': 'processed_run-1/caterpillar_4.mp4', 'path': 'processed_run-1/caterpillar_4.mp4'},
    {'name': 'processed_run-1/caterpillar_5.mp4', 'path': 'processed_run-1/caterpillar_5.mp4'},
    {'name': 'processed_run-1/caterpillar_6.mp4', 'path': 'processed_run-1/caterpillar_6.mp4'},
    {'name': 'processed_run-1/caterpillar_7.mp4', 'path': 'processed_run-1/caterpillar_7.mp4'},
    {'name': 'processed_run-1/caterpillar_8.mp4', 'path': 'processed_run-1/caterpillar_8.mp4'},
    {'name': 'processed_run-1/caterpillar_9.mp4', 'path': 'processed_run-1/caterpillar_9.mp4'},
    {'name': 'processed_run-1/dog_1.mp4', 'path': 'processed_run-1/dog_1.mp4'},
    {'name': 'processed_run-1/dog_10.mp4', 'path': 'processed_run-1/dog_10.mp4'},
    {'name': 'processed_run-1/dog_11.mp4', 'path': 'processed_run-1/dog_11.mp4'},
    {'name': 'processed_run-1/dog_12.mp4', 'path': 'processed_run-1/dog_12.mp4'},
    {'name': 'processed_run-1/dog_13.mp4', 'path': 'processed_run-1/dog_13.mp4'},
    {'name': 'processed_run-1/dog_14.mp4', 'path': 'processed_run-1/dog_14.mp4'},
    {'name': 'processed_run-1/dog_15.mp4', 'path': 'processed_run-1/dog_15.mp4'},
    {'name': 'processed_run-1/dog_16.mp4', 'path': 'processed_run-1/dog_16.mp4'},
    {'name': 'processed_run-1/dog_17.mp4', 'path': 'processed_run-1/dog_17.mp4'},
    {'name': 'processed_run-1/dog_18.mp4', 'path': 'processed_run-1/dog_18.mp4'},
    {'name': 'processed_run-1/dog_19.mp4', 'path': 'processed_run-1/dog_19.mp4'},
    {'name': 'processed_run-1/dog_2.mp4', 'path': 'processed_run-1/dog_2.mp4'},
    {'name': 'processed_run-1/dog_20.mp4', 'path': 'processed_run-1/dog_20.mp4'},
    {'name': 'processed_run-1/dog_3.mp4', 'path': 'processed_run-1/dog_3.mp4'},
    {'name': 'processed_run-1/dog_4.mp4', 'path': 'processed_run-1/dog_4.mp4'},
    {'name': 'processed_run-1/dog_5.mp4', 'path': 'processed_run-1/dog_5.mp4'},
    {'name': 'processed_run-1/dog_6.mp4', 'path': 'processed_run-1/dog_6.mp4'},
    {'name': 'processed_run-1/dog_7.mp4', 'path': 'processed_run-1/dog_7.mp4'},
    {'name': 'processed_run-1/dog_8.mp4', 'path': 'processed_run-1/dog_8.mp4'},
    {'name': 'processed_run-1/dog_9.mp4', 'path': 'processed_run-1/dog_9.mp4'},
    {'name': 'processed_run-1/fish_1.mp4', 'path': 'processed_run-1/fish_1.mp4'},
    {'name': 'processed_run-1/fish_10.mp4', 'path': 'processed_run-1/fish_10.mp4'},
    {'name': 'processed_run-1/fish_11.mp4', 'path': 'processed_run-1/fish_11.mp4'},
    {'name': 'processed_run-1/fish_12.mp4', 'path': 'processed_run-1/fish_12.mp4'},
    {'name': 'processed_run-1/fish_13.mp4', 'path': 'processed_run-1/fish_13.mp4'},
    {'name': 'processed_run-1/fish_14.mp4', 'path': 'processed_run-1/fish_14.mp4'},
    {'name': 'processed_run-1/fish_15.mp4', 'path': 'processed_run-1/fish_15.mp4'},
    {'name': 'processed_run-1/fish_16.mp4', 'path': 'processed_run-1/fish_16.mp4'},
    {'name': 'processed_run-1/fish_17.mp4', 'path': 'processed_run-1/fish_17.mp4'},
    {'name': 'processed_run-1/fish_18.mp4', 'path': 'processed_run-1/fish_18.mp4'},
    {'name': 'processed_run-1/fish_19.mp4', 'path': 'processed_run-1/fish_19.mp4'},
    {'name': 'processed_run-1/fish_2.mp4', 'path': 'processed_run-1/fish_2.mp4'},
    {'name': 'processed_run-1/fish_20.mp4', 'path': 'processed_run-1/fish_20.mp4'},
    {'name': 'processed_run-1/fish_3.mp4', 'path': 'processed_run-1/fish_3.mp4'},
    {'name': 'processed_run-1/fish_4.mp4', 'path': 'processed_run-1/fish_4.mp4'},
    {'name': 'processed_run-1/fish_5.mp4', 'path': 'processed_run-1/fish_5.mp4'},
    {'name': 'processed_run-1/fish_6.mp4', 'path': 'processed_run-1/fish_6.mp4'},
    {'name': 'processed_run-1/fish_7.mp4', 'path': 'processed_run-1/fish_7.mp4'},
    {'name': 'processed_run-1/fish_8.mp4', 'path': 'processed_run-1/fish_8.mp4'},
    {'name': 'processed_run-1/fish_9.mp4', 'path': 'processed_run-1/fish_9.mp4'},
    {'name': 'processed_run-1/frog_1.mp4', 'path': 'processed_run-1/frog_1.mp4'},
    {'name': 'processed_run-1/frog_10.mp4', 'path': 'processed_run-1/frog_10.mp4'},
    {'name': 'processed_run-1/frog_11.mp4', 'path': 'processed_run-1/frog_11.mp4'},
    {'name': 'processed_run-1/frog_12.mp4', 'path': 'processed_run-1/frog_12.mp4'},
    {'name': 'processed_run-1/frog_13.mp4', 'path': 'processed_run-1/frog_13.mp4'},
    {'name': 'processed_run-1/frog_14.mp4', 'path': 'processed_run-1/frog_14.mp4'},
    {'name': 'processed_run-1/frog_15.mp4', 'path': 'processed_run-1/frog_15.mp4'},
    {'name': 'processed_run-1/frog_16.mp4', 'path': 'processed_run-1/frog_16.mp4'},
    {'name': 'processed_run-1/frog_17.mp4', 'path': 'processed_run-1/frog_17.mp4'},
    {'name': 'processed_run-1/frog_18.mp4', 'path': 'processed_run-1/frog_18.mp4'},
    {'name': 'processed_run-1/frog_19.mp4', 'path': 'processed_run-1/frog_19.mp4'},
    {'name': 'processed_run-1/frog_2.mp4', 'path': 'processed_run-1/frog_2.mp4'},
    {'name': 'processed_run-1/frog_20.mp4', 'path': 'processed_run-1/frog_20.mp4'},
    {'name': 'processed_run-1/frog_3.mp4', 'path': 'processed_run-1/frog_3.mp4'},
    {'name': 'processed_run-1/frog_4.mp4', 'path': 'processed_run-1/frog_4.mp4'},
    {'name': 'processed_run-1/frog_5.mp4', 'path': 'processed_run-1/frog_5.mp4'},
    {'name': 'processed_run-1/frog_6.mp4', 'path': 'processed_run-1/frog_6.mp4'},
    {'name': 'processed_run-1/frog_7.mp4', 'path': 'processed_run-1/frog_7.mp4'},
    {'name': 'processed_run-1/frog_8.mp4', 'path': 'processed_run-1/frog_8.mp4'},
    {'name': 'processed_run-1/frog_9.mp4', 'path': 'processed_run-1/frog_9.mp4'},
    {'name': 'processed_run-1/horse_1.mp4', 'path': 'processed_run-1/horse_1.mp4'},
    {'name': 'processed_run-1/horse_10.mp4', 'path': 'processed_run-1/horse_10.mp4'},
    {'name': 'processed_run-1/horse_11.mp4', 'path': 'processed_run-1/horse_11.mp4'},
    {'name': 'processed_run-1/horse_12.mp4', 'path': 'processed_run-1/horse_12.mp4'},
    {'name': 'processed_run-1/horse_13.mp4', 'path': 'processed_run-1/horse_13.mp4'},
    {'name': 'processed_run-1/horse_14.mp4', 'path': 'processed_run-1/horse_14.mp4'},
    {'name': 'processed_run-1/horse_15.mp4', 'path': 'processed_run-1/horse_15.mp4'},
    {'name': 'processed_run-1/horse_16.mp4', 'path': 'processed_run-1/horse_16.mp4'},
    {'name': 'processed_run-1/horse_17.mp4', 'path': 'processed_run-1/horse_17.mp4'},
    {'name': 'processed_run-1/horse_18.mp4', 'path': 'processed_run-1/horse_18.mp4'},
    {'name': 'processed_run-1/horse_19.mp4', 'path': 'processed_run-1/horse_19.mp4'},
    {'name': 'processed_run-1/horse_2.mp4', 'path': 'processed_run-1/horse_2.mp4'},
    {'name': 'processed_run-1/horse_20.mp4', 'path': 'processed_run-1/horse_20.mp4'},
    {'name': 'processed_run-1/horse_3.mp4', 'path': 'processed_run-1/horse_3.mp4'},
    {'name': 'processed_run-1/horse_4.mp4', 'path': 'processed_run-1/horse_4.mp4'},
    {'name': 'processed_run-1/horse_5.mp4', 'path': 'processed_run-1/horse_5.mp4'},
    {'name': 'processed_run-1/horse_6.mp4', 'path': 'processed_run-1/horse_6.mp4'},
    {'name': 'processed_run-1/horse_7.mp4', 'path': 'processed_run-1/horse_7.mp4'},
    {'name': 'processed_run-1/horse_8.mp4', 'path': 'processed_run-1/horse_8.mp4'},
    {'name': 'processed_run-1/horse_9.mp4', 'path': 'processed_run-1/horse_9.mp4'},
    {'name': 'processed_run-1/shark_1.mp4', 'path': 'processed_run-1/shark_1.mp4'},
    {'name': 'processed_run-1/shark_10.mp4', 'path': 'processed_run-1/shark_10.mp4'},
    {'name': 'processed_run-1/shark_11.mp4', 'path': 'processed_run-1/shark_11.mp4'},
    {'name': 'processed_run-1/shark_12.mp4', 'path': 'processed_run-1/shark_12.mp4'},
    {'name': 'processed_run-1/shark_13.mp4', 'path': 'processed_run-1/shark_13.mp4'},
    {'name': 'processed_run-1/shark_14.mp4', 'path': 'processed_run-1/shark_14.mp4'},
    {'name': 'processed_run-1/shark_15.mp4', 'path': 'processed_run-1/shark_15.mp4'},
    {'name': 'processed_run-1/shark_16.mp4', 'path': 'processed_run-1/shark_16.mp4'},
    {'name': 'processed_run-1/shark_17.mp4', 'path': 'processed_run-1/shark_17.mp4'},
    {'name': 'processed_run-1/shark_18.mp4', 'path': 'processed_run-1/shark_18.mp4'},
    {'name': 'processed_run-1/shark_19.mp4', 'path': 'processed_run-1/shark_19.mp4'},
    {'name': 'processed_run-1/shark_2.mp4', 'path': 'processed_run-1/shark_2.mp4'},
    {'name': 'processed_run-1/shark_20.mp4', 'path': 'processed_run-1/shark_20.mp4'},
    {'name': 'processed_run-1/shark_3.mp4', 'path': 'processed_run-1/shark_3.mp4'},
    {'name': 'processed_run-1/shark_4.mp4', 'path': 'processed_run-1/shark_4.mp4'},
    {'name': 'processed_run-1/shark_5.mp4', 'path': 'processed_run-1/shark_5.mp4'},
    {'name': 'processed_run-1/shark_6.mp4', 'path': 'processed_run-1/shark_6.mp4'},
    {'name': 'processed_run-1/shark_7.mp4', 'path': 'processed_run-1/shark_7.mp4'},
    {'name': 'processed_run-1/shark_8.mp4', 'path': 'processed_run-1/shark_8.mp4'},
    {'name': 'processed_run-1/shark_9.mp4', 'path': 'processed_run-1/shark_9.mp4'},
    {'name': 'processed_run-1/snake_1.mp4', 'path': 'processed_run-1/snake_1.mp4'},
    {'name': 'processed_run-1/snake_10.mp4', 'path': 'processed_run-1/snake_10.mp4'},
    {'name': 'processed_run-1/snake_11.mp4', 'path': 'processed_run-1/snake_11.mp4'},
    {'name': 'processed_run-1/snake_12.mp4', 'path': 'processed_run-1/snake_12.mp4'},
    {'name': 'processed_run-1/snake_13.mp4', 'path': 'processed_run-1/snake_13.mp4'},
    {'name': 'processed_run-1/snake_14.mp4', 'path': 'processed_run-1/snake_14.mp4'},
    {'name': 'processed_run-1/snake_15.mp4', 'path': 'processed_run-1/snake_15.mp4'},
    {'name': 'processed_run-1/snake_16.mp4', 'path': 'processed_run-1/snake_16.mp4'},
    {'name': 'processed_run-1/snake_17.mp4', 'path': 'processed_run-1/snake_17.mp4'},
    {'name': 'processed_run-1/snake_18.mp4', 'path': 'processed_run-1/snake_18.mp4'},
    {'name': 'processed_run-1/snake_19.mp4', 'path': 'processed_run-1/snake_19.mp4'},
    {'name': 'processed_run-1/snake_2.mp4', 'path': 'processed_run-1/snake_2.mp4'},
    {'name': 'processed_run-1/snake_20.mp4', 'path': 'processed_run-1/snake_20.mp4'},
    {'name': 'processed_run-1/snake_3.mp4', 'path': 'processed_run-1/snake_3.mp4'},
    {'name': 'processed_run-1/snake_4.mp4', 'path': 'processed_run-1/snake_4.mp4'},
    {'name': 'processed_run-1/snake_5.mp4', 'path': 'processed_run-1/snake_5.mp4'},
    {'name': 'processed_run-1/snake_6.mp4', 'path': 'processed_run-1/snake_6.mp4'},
    {'name': 'processed_run-1/snake_7.mp4', 'path': 'processed_run-1/snake_7.mp4'},
    {'name': 'processed_run-1/snake_8.mp4', 'path': 'processed_run-1/snake_8.mp4'},
    {'name': 'processed_run-1/snake_9.mp4', 'path': 'processed_run-1/snake_9.mp4'},
    {'name': 'processed_run-1/spider_1.mp4', 'path': 'processed_run-1/spider_1.mp4'},
    {'name': 'processed_run-1/spider_10.mp4', 'path': 'processed_run-1/spider_10.mp4'},
    {'name': 'processed_run-1/spider_11.mp4', 'path': 'processed_run-1/spider_11.mp4'},
    {'name': 'processed_run-1/spider_12.mp4', 'path': 'processed_run-1/spider_12.mp4'},
    {'name': 'processed_run-1/spider_13.mp4', 'path': 'processed_run-1/spider_13.mp4'},
    {'name': 'processed_run-1/spider_14.mp4', 'path': 'processed_run-1/spider_14.mp4'},
    {'name': 'processed_run-1/spider_15.mp4', 'path': 'processed_run-1/spider_15.mp4'},
    {'name': 'processed_run-1/spider_16.mp4', 'path': 'processed_run-1/spider_16.mp4'},
    {'name': 'processed_run-1/spider_17.mp4', 'path': 'processed_run-1/spider_17.mp4'},
    {'name': 'processed_run-1/spider_18.mp4', 'path': 'processed_run-1/spider_18.mp4'},
    {'name': 'processed_run-1/spider_19.mp4', 'path': 'processed_run-1/spider_19.mp4'},
    {'name': 'processed_run-1/spider_2.mp4', 'path': 'processed_run-1/spider_2.mp4'},
    {'name': 'processed_run-1/spider_20.mp4', 'path': 'processed_run-1/spider_20.mp4'},
    {'name': 'processed_run-1/spider_3.mp4', 'path': 'processed_run-1/spider_3.mp4'},
    {'name': 'processed_run-1/spider_4.mp4', 'path': 'processed_run-1/spider_4.mp4'},
    {'name': 'processed_run-1/spider_5.mp4', 'path': 'processed_run-1/spider_5.mp4'},
    {'name': 'processed_run-1/spider_6.mp4', 'path': 'processed_run-1/spider_6.mp4'},
    {'name': 'processed_run-1/spider_7.mp4', 'path': 'processed_run-1/spider_7.mp4'},
    {'name': 'processed_run-1/spider_8.mp4', 'path': 'processed_run-1/spider_8.mp4'},
    {'name': 'processed_run-1/spider_9.mp4', 'path': 'processed_run-1/spider_9.mp4'},
    {'name': 'processed_run-1/wasp_1.mp4', 'path': 'processed_run-1/wasp_1.mp4'},
    {'name': 'processed_run-1/wasp_10.mp4', 'path': 'processed_run-1/wasp_10.mp4'},
    {'name': 'processed_run-1/wasp_11.mp4', 'path': 'processed_run-1/wasp_11.mp4'},
    {'name': 'processed_run-1/wasp_12.mp4', 'path': 'processed_run-1/wasp_12.mp4'},
    {'name': 'processed_run-1/wasp_13.mp4', 'path': 'processed_run-1/wasp_13.mp4'},
    {'name': 'processed_run-1/wasp_14.mp4', 'path': 'processed_run-1/wasp_14.mp4'},
    {'name': 'processed_run-1/wasp_15.mp4', 'path': 'processed_run-1/wasp_15.mp4'},
    {'name': 'processed_run-1/wasp_16.mp4', 'path': 'processed_run-1/wasp_16.mp4'},
    {'name': 'processed_run-1/wasp_17.mp4', 'path': 'processed_run-1/wasp_17.mp4'},
    {'name': 'processed_run-1/wasp_18.mp4', 'path': 'processed_run-1/wasp_18.mp4'},
    {'name': 'processed_run-1/wasp_19.mp4', 'path': 'processed_run-1/wasp_19.mp4'},
    {'name': 'processed_run-1/wasp_2.mp4', 'path': 'processed_run-1/wasp_2.mp4'},
    {'name': 'processed_run-1/wasp_20.mp4', 'path': 'processed_run-1/wasp_20.mp4'},
    {'name': 'processed_run-1/wasp_3.mp4', 'path': 'processed_run-1/wasp_3.mp4'},
    {'name': 'processed_run-1/wasp_4.mp4', 'path': 'processed_run-1/wasp_4.mp4'},
    {'name': 'processed_run-1/wasp_5.mp4', 'path': 'processed_run-1/wasp_5.mp4'},
    {'name': 'processed_run-1/wasp_6.mp4', 'path': 'processed_run-1/wasp_6.mp4'},
    {'name': 'processed_run-1/wasp_7.mp4', 'path': 'processed_run-1/wasp_7.mp4'},
    {'name': 'processed_run-1/wasp_8.mp4', 'path': 'processed_run-1/wasp_8.mp4'},
    {'name': 'processed_run-1/wasp_9.mp4', 'path': 'processed_run-1/wasp_9.mp4'},
    {'name': 'conditions_run-2.csv', 'path': 'conditions_run-2.csv'},
    {'name': 'processed_run-2/beetle_1.mp4', 'path': 'processed_run-2/beetle_1.mp4'},
    {'name': 'processed_run-2/beetle_10.mp4', 'path': 'processed_run-2/beetle_10.mp4'},
    {'name': 'processed_run-2/beetle_11.mp4', 'path': 'processed_run-2/beetle_11.mp4'},
    {'name': 'processed_run-2/beetle_12.mp4', 'path': 'processed_run-2/beetle_12.mp4'},
    {'name': 'processed_run-2/beetle_13.mp4', 'path': 'processed_run-2/beetle_13.mp4'},
    {'name': 'processed_run-2/beetle_14.mp4', 'path': 'processed_run-2/beetle_14.mp4'},
    {'name': 'processed_run-2/beetle_15.mp4', 'path': 'processed_run-2/beetle_15.mp4'},
    {'name': 'processed_run-2/beetle_16.mp4', 'path': 'processed_run-2/beetle_16.mp4'},
    {'name': 'processed_run-2/beetle_17.mp4', 'path': 'processed_run-2/beetle_17.mp4'},
    {'name': 'processed_run-2/beetle_18.mp4', 'path': 'processed_run-2/beetle_18.mp4'},
    {'name': 'processed_run-2/beetle_19.mp4', 'path': 'processed_run-2/beetle_19.mp4'},
    {'name': 'processed_run-2/beetle_2.mp4', 'path': 'processed_run-2/beetle_2.mp4'},
    {'name': 'processed_run-2/beetle_20.mp4', 'path': 'processed_run-2/beetle_20.mp4'},
    {'name': 'processed_run-2/beetle_3.mp4', 'path': 'processed_run-2/beetle_3.mp4'},
    {'name': 'processed_run-2/beetle_4.mp4', 'path': 'processed_run-2/beetle_4.mp4'},
    {'name': 'processed_run-2/beetle_5.mp4', 'path': 'processed_run-2/beetle_5.mp4'},
    {'name': 'processed_run-2/beetle_6.mp4', 'path': 'processed_run-2/beetle_6.mp4'},
    {'name': 'processed_run-2/beetle_7.mp4', 'path': 'processed_run-2/beetle_7.mp4'},
    {'name': 'processed_run-2/beetle_8.mp4', 'path': 'processed_run-2/beetle_8.mp4'},
    {'name': 'processed_run-2/beetle_9.mp4', 'path': 'processed_run-2/beetle_9.mp4'},
    {'name': 'processed_run-2/bull_1.mp4', 'path': 'processed_run-2/bull_1.mp4'},
    {'name': 'processed_run-2/bull_10.mp4', 'path': 'processed_run-2/bull_10.mp4'},
    {'name': 'processed_run-2/bull_11.mp4', 'path': 'processed_run-2/bull_11.mp4'},
    {'name': 'processed_run-2/bull_12.mp4', 'path': 'processed_run-2/bull_12.mp4'},
    {'name': 'processed_run-2/bull_13.mp4', 'path': 'processed_run-2/bull_13.mp4'},
    {'name': 'processed_run-2/bull_14.mp4', 'path': 'processed_run-2/bull_14.mp4'},
    {'name': 'processed_run-2/bull_15.mp4', 'path': 'processed_run-2/bull_15.mp4'},
    {'name': 'processed_run-2/bull_16.mp4', 'path': 'processed_run-2/bull_16.mp4'},
    {'name': 'processed_run-2/bull_17.mp4', 'path': 'processed_run-2/bull_17.mp4'},
    {'name': 'processed_run-2/bull_18.mp4', 'path': 'processed_run-2/bull_18.mp4'},
    {'name': 'processed_run-2/bull_19.mp4', 'path': 'processed_run-2/bull_19.mp4'},
    {'name': 'processed_run-2/bull_2.mp4', 'path': 'processed_run-2/bull_2.mp4'},
    {'name': 'processed_run-2/bull_20.mp4', 'path': 'processed_run-2/bull_20.mp4'},
    {'name': 'processed_run-2/bull_3.mp4', 'path': 'processed_run-2/bull_3.mp4'},
    {'name': 'processed_run-2/bull_4.mp4', 'path': 'processed_run-2/bull_4.mp4'},
    {'name': 'processed_run-2/bull_5.mp4', 'path': 'processed_run-2/bull_5.mp4'},
    {'name': 'processed_run-2/bull_6.mp4', 'path': 'processed_run-2/bull_6.mp4'},
    {'name': 'processed_run-2/bull_7.mp4', 'path': 'processed_run-2/bull_7.mp4'},
    {'name': 'processed_run-2/bull_8.mp4', 'path': 'processed_run-2/bull_8.mp4'},
    {'name': 'processed_run-2/bull_9.mp4', 'path': 'processed_run-2/bull_9.mp4'},
    {'name': 'processed_run-2/butterfly_1.mp4', 'path': 'processed_run-2/butterfly_1.mp4'},
    {'name': 'processed_run-2/butterfly_10.mp4', 'path': 'processed_run-2/butterfly_10.mp4'},
    {'name': 'processed_run-2/butterfly_11.mp4', 'path': 'processed_run-2/butterfly_11.mp4'},
    {'name': 'processed_run-2/butterfly_12.mp4', 'path': 'processed_run-2/butterfly_12.mp4'},
    {'name': 'processed_run-2/butterfly_13.mp4', 'path': 'processed_run-2/butterfly_13.mp4'},
    {'name': 'processed_run-2/butterfly_14.mp4', 'path': 'processed_run-2/butterfly_14.mp4'},
    {'name': 'processed_run-2/butterfly_15.mp4', 'path': 'processed_run-2/butterfly_15.mp4'},
    {'name': 'processed_run-2/butterfly_16.mp4', 'path': 'processed_run-2/butterfly_16.mp4'},
    {'name': 'processed_run-2/butterfly_17.mp4', 'path': 'processed_run-2/butterfly_17.mp4'},
    {'name': 'processed_run-2/butterfly_18.mp4', 'path': 'processed_run-2/butterfly_18.mp4'},
    {'name': 'processed_run-2/butterfly_19.mp4', 'path': 'processed_run-2/butterfly_19.mp4'},
    {'name': 'processed_run-2/butterfly_2.mp4', 'path': 'processed_run-2/butterfly_2.mp4'},
    {'name': 'processed_run-2/butterfly_20.mp4', 'path': 'processed_run-2/butterfly_20.mp4'},
    {'name': 'processed_run-2/butterfly_3.mp4', 'path': 'processed_run-2/butterfly_3.mp4'},
    {'name': 'processed_run-2/butterfly_4.mp4', 'path': 'processed_run-2/butterfly_4.mp4'},
    {'name': 'processed_run-2/butterfly_5.mp4', 'path': 'processed_run-2/butterfly_5.mp4'},
    {'name': 'processed_run-2/butterfly_6.mp4', 'path': 'processed_run-2/butterfly_6.mp4'},
    {'name': 'processed_run-2/butterfly_7.mp4', 'path': 'processed_run-2/butterfly_7.mp4'},
    {'name': 'processed_run-2/butterfly_8.mp4', 'path': 'processed_run-2/butterfly_8.mp4'},
    {'name': 'processed_run-2/butterfly_9.mp4', 'path': 'processed_run-2/butterfly_9.mp4'},
    {'name': 'processed_run-2/cat_1.mp4', 'path': 'processed_run-2/cat_1.mp4'},
    {'name': 'processed_run-2/cat_10.mp4', 'path': 'processed_run-2/cat_10.mp4'},
    {'name': 'processed_run-2/cat_11.mp4', 'path': 'processed_run-2/cat_11.mp4'},
    {'name': 'processed_run-2/cat_12.mp4', 'path': 'processed_run-2/cat_12.mp4'},
    {'name': 'processed_run-2/cat_13.mp4', 'path': 'processed_run-2/cat_13.mp4'},
    {'name': 'processed_run-2/cat_14.mp4', 'path': 'processed_run-2/cat_14.mp4'},
    {'name': 'processed_run-2/cat_15.mp4', 'path': 'processed_run-2/cat_15.mp4'},
    {'name': 'processed_run-2/cat_16.mp4', 'path': 'processed_run-2/cat_16.mp4'},
    {'name': 'processed_run-2/cat_17.mp4', 'path': 'processed_run-2/cat_17.mp4'},
    {'name': 'processed_run-2/cat_18.mp4', 'path': 'processed_run-2/cat_18.mp4'},
    {'name': 'processed_run-2/cat_19.mp4', 'path': 'processed_run-2/cat_19.mp4'},
    {'name': 'processed_run-2/cat_2.mp4', 'path': 'processed_run-2/cat_2.mp4'},
    {'name': 'processed_run-2/cat_20.mp4', 'path': 'processed_run-2/cat_20.mp4'},
    {'name': 'processed_run-2/cat_3.mp4', 'path': 'processed_run-2/cat_3.mp4'},
    {'name': 'processed_run-2/cat_4.mp4', 'path': 'processed_run-2/cat_4.mp4'},
    {'name': 'processed_run-2/cat_5.mp4', 'path': 'processed_run-2/cat_5.mp4'},
    {'name': 'processed_run-2/cat_6.mp4', 'path': 'processed_run-2/cat_6.mp4'},
    {'name': 'processed_run-2/cat_7.mp4', 'path': 'processed_run-2/cat_7.mp4'},
    {'name': 'processed_run-2/cat_8.mp4', 'path': 'processed_run-2/cat_8.mp4'},
    {'name': 'processed_run-2/cat_9.mp4', 'path': 'processed_run-2/cat_9.mp4'},
    {'name': 'processed_run-2/crocodile_1.mp4', 'path': 'processed_run-2/crocodile_1.mp4'},
    {'name': 'processed_run-2/crocodile_10.mp4', 'path': 'processed_run-2/crocodile_10.mp4'},
    {'name': 'processed_run-2/crocodile_11.mp4', 'path': 'processed_run-2/crocodile_11.mp4'},
    {'name': 'processed_run-2/crocodile_12.mp4', 'path': 'processed_run-2/crocodile_12.mp4'},
    {'name': 'processed_run-2/crocodile_13.mp4', 'path': 'processed_run-2/crocodile_13.mp4'},
    {'name': 'processed_run-2/crocodile_14.mp4', 'path': 'processed_run-2/crocodile_14.mp4'},
    {'name': 'processed_run-2/crocodile_15.mp4', 'path': 'processed_run-2/crocodile_15.mp4'},
    {'name': 'processed_run-2/crocodile_16.mp4', 'path': 'processed_run-2/crocodile_16.mp4'},
    {'name': 'processed_run-2/crocodile_17.mp4', 'path': 'processed_run-2/crocodile_17.mp4'},
    {'name': 'processed_run-2/crocodile_18.mp4', 'path': 'processed_run-2/crocodile_18.mp4'},
    {'name': 'processed_run-2/crocodile_19.mp4', 'path': 'processed_run-2/crocodile_19.mp4'},
    {'name': 'processed_run-2/crocodile_2.mp4', 'path': 'processed_run-2/crocodile_2.mp4'},
    {'name': 'processed_run-2/crocodile_20.mp4', 'path': 'processed_run-2/crocodile_20.mp4'},
    {'name': 'processed_run-2/crocodile_3.mp4', 'path': 'processed_run-2/crocodile_3.mp4'},
    {'name': 'processed_run-2/crocodile_4.mp4', 'path': 'processed_run-2/crocodile_4.mp4'},
    {'name': 'processed_run-2/crocodile_5.mp4', 'path': 'processed_run-2/crocodile_5.mp4'},
    {'name': 'processed_run-2/crocodile_6.mp4', 'path': 'processed_run-2/crocodile_6.mp4'},
    {'name': 'processed_run-2/crocodile_7.mp4', 'path': 'processed_run-2/crocodile_7.mp4'},
    {'name': 'processed_run-2/crocodile_8.mp4', 'path': 'processed_run-2/crocodile_8.mp4'},
    {'name': 'processed_run-2/crocodile_9.mp4', 'path': 'processed_run-2/crocodile_9.mp4'},
    {'name': 'processed_run-2/millipede_1.mp4', 'path': 'processed_run-2/millipede_1.mp4'},
    {'name': 'processed_run-2/millipede_10.mp4', 'path': 'processed_run-2/millipede_10.mp4'},
    {'name': 'processed_run-2/millipede_11.mp4', 'path': 'processed_run-2/millipede_11.mp4'},
    {'name': 'processed_run-2/millipede_12.mp4', 'path': 'processed_run-2/millipede_12.mp4'},
    {'name': 'processed_run-2/millipede_13.mp4', 'path': 'processed_run-2/millipede_13.mp4'},
    {'name': 'processed_run-2/millipede_14.mp4', 'path': 'processed_run-2/millipede_14.mp4'},
    {'name': 'processed_run-2/millipede_15.mp4', 'path': 'processed_run-2/millipede_15.mp4'},
    {'name': 'processed_run-2/millipede_16.mp4', 'path': 'processed_run-2/millipede_16.mp4'},
    {'name': 'processed_run-2/millipede_17.mp4', 'path': 'processed_run-2/millipede_17.mp4'},
    {'name': 'processed_run-2/millipede_18.mp4', 'path': 'processed_run-2/millipede_18.mp4'},
    {'name': 'processed_run-2/millipede_19.mp4', 'path': 'processed_run-2/millipede_19.mp4'},
    {'name': 'processed_run-2/millipede_2.mp4', 'path': 'processed_run-2/millipede_2.mp4'},
    {'name': 'processed_run-2/millipede_20.mp4', 'path': 'processed_run-2/millipede_20.mp4'},
    {'name': 'processed_run-2/millipede_3.mp4', 'path': 'processed_run-2/millipede_3.mp4'},
    {'name': 'processed_run-2/millipede_4.mp4', 'path': 'processed_run-2/millipede_4.mp4'},
    {'name': 'processed_run-2/millipede_5.mp4', 'path': 'processed_run-2/millipede_5.mp4'},
    {'name': 'processed_run-2/millipede_6.mp4', 'path': 'processed_run-2/millipede_6.mp4'},
    {'name': 'processed_run-2/millipede_7.mp4', 'path': 'processed_run-2/millipede_7.mp4'},
    {'name': 'processed_run-2/millipede_8.mp4', 'path': 'processed_run-2/millipede_8.mp4'},
    {'name': 'processed_run-2/millipede_9.mp4', 'path': 'processed_run-2/millipede_9.mp4'},
    {'name': 'processed_run-2/rabbit_1.mp4', 'path': 'processed_run-2/rabbit_1.mp4'},
    {'name': 'processed_run-2/rabbit_10.mp4', 'path': 'processed_run-2/rabbit_10.mp4'},
    {'name': 'processed_run-2/rabbit_11.mp4', 'path': 'processed_run-2/rabbit_11.mp4'},
    {'name': 'processed_run-2/rabbit_12.mp4', 'path': 'processed_run-2/rabbit_12.mp4'},
    {'name': 'processed_run-2/rabbit_13.mp4', 'path': 'processed_run-2/rabbit_13.mp4'},
    {'name': 'processed_run-2/rabbit_14.mp4', 'path': 'processed_run-2/rabbit_14.mp4'},
    {'name': 'processed_run-2/rabbit_15.mp4', 'path': 'processed_run-2/rabbit_15.mp4'},
    {'name': 'processed_run-2/rabbit_16.mp4', 'path': 'processed_run-2/rabbit_16.mp4'},
    {'name': 'processed_run-2/rabbit_17.mp4', 'path': 'processed_run-2/rabbit_17.mp4'},
    {'name': 'processed_run-2/rabbit_18.mp4', 'path': 'processed_run-2/rabbit_18.mp4'},
    {'name': 'processed_run-2/rabbit_19.mp4', 'path': 'processed_run-2/rabbit_19.mp4'},
    {'name': 'processed_run-2/rabbit_2.mp4', 'path': 'processed_run-2/rabbit_2.mp4'},
    {'name': 'processed_run-2/rabbit_20.mp4', 'path': 'processed_run-2/rabbit_20.mp4'},
    {'name': 'processed_run-2/rabbit_3.mp4', 'path': 'processed_run-2/rabbit_3.mp4'},
    {'name': 'processed_run-2/rabbit_4.mp4', 'path': 'processed_run-2/rabbit_4.mp4'},
    {'name': 'processed_run-2/rabbit_5.mp4', 'path': 'processed_run-2/rabbit_5.mp4'},
    {'name': 'processed_run-2/rabbit_6.mp4', 'path': 'processed_run-2/rabbit_6.mp4'},
    {'name': 'processed_run-2/rabbit_7.mp4', 'path': 'processed_run-2/rabbit_7.mp4'},
    {'name': 'processed_run-2/rabbit_8.mp4', 'path': 'processed_run-2/rabbit_8.mp4'},
    {'name': 'processed_run-2/rabbit_9.mp4', 'path': 'processed_run-2/rabbit_9.mp4'},
    {'name': 'processed_run-2/rat_1.mp4', 'path': 'processed_run-2/rat_1.mp4'},
    {'name': 'processed_run-2/rat_10.mp4', 'path': 'processed_run-2/rat_10.mp4'},
    {'name': 'processed_run-2/rat_11.mp4', 'path': 'processed_run-2/rat_11.mp4'},
    {'name': 'processed_run-2/rat_12.mp4', 'path': 'processed_run-2/rat_12.mp4'},
    {'name': 'processed_run-2/rat_13.mp4', 'path': 'processed_run-2/rat_13.mp4'},
    {'name': 'processed_run-2/rat_14.mp4', 'path': 'processed_run-2/rat_14.mp4'},
    {'name': 'processed_run-2/rat_15.mp4', 'path': 'processed_run-2/rat_15.mp4'},
    {'name': 'processed_run-2/rat_16.mp4', 'path': 'processed_run-2/rat_16.mp4'},
    {'name': 'processed_run-2/rat_17.mp4', 'path': 'processed_run-2/rat_17.mp4'},
    {'name': 'processed_run-2/rat_18.mp4', 'path': 'processed_run-2/rat_18.mp4'},
    {'name': 'processed_run-2/rat_19.mp4', 'path': 'processed_run-2/rat_19.mp4'},
    {'name': 'processed_run-2/rat_2.mp4', 'path': 'processed_run-2/rat_2.mp4'},
    {'name': 'processed_run-2/rat_20.mp4', 'path': 'processed_run-2/rat_20.mp4'},
    {'name': 'processed_run-2/rat_3.mp4', 'path': 'processed_run-2/rat_3.mp4'},
    {'name': 'processed_run-2/rat_4.mp4', 'path': 'processed_run-2/rat_4.mp4'},
    {'name': 'processed_run-2/rat_5.mp4', 'path': 'processed_run-2/rat_5.mp4'},
    {'name': 'processed_run-2/rat_6.mp4', 'path': 'processed_run-2/rat_6.mp4'},
    {'name': 'processed_run-2/rat_7.mp4', 'path': 'processed_run-2/rat_7.mp4'},
    {'name': 'processed_run-2/rat_8.mp4', 'path': 'processed_run-2/rat_8.mp4'},
    {'name': 'processed_run-2/rat_9.mp4', 'path': 'processed_run-2/rat_9.mp4'},
    {'name': 'processed_run-2/tiger_1.mp4', 'path': 'processed_run-2/tiger_1.mp4'},
    {'name': 'processed_run-2/tiger_10.mp4', 'path': 'processed_run-2/tiger_10.mp4'},
    {'name': 'processed_run-2/tiger_11.mp4', 'path': 'processed_run-2/tiger_11.mp4'},
    {'name': 'processed_run-2/tiger_12.mp4', 'path': 'processed_run-2/tiger_12.mp4'},
    {'name': 'processed_run-2/tiger_13.mp4', 'path': 'processed_run-2/tiger_13.mp4'},
    {'name': 'processed_run-2/tiger_14.mp4', 'path': 'processed_run-2/tiger_14.mp4'},
    {'name': 'processed_run-2/tiger_15.mp4', 'path': 'processed_run-2/tiger_15.mp4'},
    {'name': 'processed_run-2/tiger_16.mp4', 'path': 'processed_run-2/tiger_16.mp4'},
    {'name': 'processed_run-2/tiger_17.mp4', 'path': 'processed_run-2/tiger_17.mp4'},
    {'name': 'processed_run-2/tiger_18.mp4', 'path': 'processed_run-2/tiger_18.mp4'},
    {'name': 'processed_run-2/tiger_19.mp4', 'path': 'processed_run-2/tiger_19.mp4'},
    {'name': 'processed_run-2/tiger_2.mp4', 'path': 'processed_run-2/tiger_2.mp4'},
    {'name': 'processed_run-2/tiger_20.mp4', 'path': 'processed_run-2/tiger_20.mp4'},
    {'name': 'processed_run-2/tiger_3.mp4', 'path': 'processed_run-2/tiger_3.mp4'},
    {'name': 'processed_run-2/tiger_4.mp4', 'path': 'processed_run-2/tiger_4.mp4'},
    {'name': 'processed_run-2/tiger_5.mp4', 'path': 'processed_run-2/tiger_5.mp4'},
    {'name': 'processed_run-2/tiger_6.mp4', 'path': 'processed_run-2/tiger_6.mp4'},
    {'name': 'processed_run-2/tiger_7.mp4', 'path': 'processed_run-2/tiger_7.mp4'},
    {'name': 'processed_run-2/tiger_8.mp4', 'path': 'processed_run-2/tiger_8.mp4'},
    {'name': 'processed_run-2/tiger_9.mp4', 'path': 'processed_run-2/tiger_9.mp4'},
    {'name': 'processed_run-2/whale_1.mp4', 'path': 'processed_run-2/whale_1.mp4'},
    {'name': 'processed_run-2/whale_10.mp4', 'path': 'processed_run-2/whale_10.mp4'},
    {'name': 'processed_run-2/whale_11.mp4', 'path': 'processed_run-2/whale_11.mp4'},
    {'name': 'processed_run-2/whale_12.mp4', 'path': 'processed_run-2/whale_12.mp4'},
    {'name': 'processed_run-2/whale_13.mp4', 'path': 'processed_run-2/whale_13.mp4'},
    {'name': 'processed_run-2/whale_14.mp4', 'path': 'processed_run-2/whale_14.mp4'},
    {'name': 'processed_run-2/whale_15.mp4', 'path': 'processed_run-2/whale_15.mp4'},
    {'name': 'processed_run-2/whale_16.mp4', 'path': 'processed_run-2/whale_16.mp4'},
    {'name': 'processed_run-2/whale_17.mp4', 'path': 'processed_run-2/whale_17.mp4'},
    {'name': 'processed_run-2/whale_18.mp4', 'path': 'processed_run-2/whale_18.mp4'},
    {'name': 'processed_run-2/whale_19.mp4', 'path': 'processed_run-2/whale_19.mp4'},
    {'name': 'processed_run-2/whale_2.mp4', 'path': 'processed_run-2/whale_2.mp4'},
    {'name': 'processed_run-2/whale_20.mp4', 'path': 'processed_run-2/whale_20.mp4'},
    {'name': 'processed_run-2/whale_3.mp4', 'path': 'processed_run-2/whale_3.mp4'},
    {'name': 'processed_run-2/whale_4.mp4', 'path': 'processed_run-2/whale_4.mp4'},
    {'name': 'processed_run-2/whale_5.mp4', 'path': 'processed_run-2/whale_5.mp4'},
    {'name': 'processed_run-2/whale_6.mp4', 'path': 'processed_run-2/whale_6.mp4'},
    {'name': 'processed_run-2/whale_7.mp4', 'path': 'processed_run-2/whale_7.mp4'},
    {'name': 'processed_run-2/whale_8.mp4', 'path': 'processed_run-2/whale_8.mp4'},
    {'name': 'processed_run-2/whale_9.mp4', 'path': 'processed_run-2/whale_9.mp4'},
    {'name': 'processed_run-2/beetle_1.mp4', 'path': 'processed_run-2/beetle_1.mp4'},
    {'name': 'processed_run-2/beetle_2.mp4', 'path': 'processed_run-2/beetle_2.mp4'},
    {'name': 'processed_run-2/beetle_3.mp4', 'path': 'processed_run-2/beetle_3.mp4'},
    {'name': 'processed_run-2/beetle_4.mp4', 'path': 'processed_run-2/beetle_4.mp4'},
    {'name': 'processed_run-2/beetle_5.mp4', 'path': 'processed_run-2/beetle_5.mp4'},
    {'name': 'processed_run-2/beetle_6.mp4', 'path': 'processed_run-2/beetle_6.mp4'},
    {'name': 'processed_run-2/beetle_7.mp4', 'path': 'processed_run-2/beetle_7.mp4'},
    {'name': 'processed_run-2/beetle_8.mp4', 'path': 'processed_run-2/beetle_8.mp4'},
    {'name': 'processed_run-2/beetle_9.mp4', 'path': 'processed_run-2/beetle_9.mp4'},
    {'name': 'processed_run-2/beetle_10.mp4', 'path': 'processed_run-2/beetle_10.mp4'},
    {'name': 'processed_run-2/beetle_11.mp4', 'path': 'processed_run-2/beetle_11.mp4'},
    {'name': 'processed_run-2/beetle_12.mp4', 'path': 'processed_run-2/beetle_12.mp4'},
    {'name': 'processed_run-2/beetle_13.mp4', 'path': 'processed_run-2/beetle_13.mp4'},
    {'name': 'processed_run-2/beetle_14.mp4', 'path': 'processed_run-2/beetle_14.mp4'},
    {'name': 'processed_run-2/beetle_15.mp4', 'path': 'processed_run-2/beetle_15.mp4'},
    {'name': 'processed_run-2/beetle_16.mp4', 'path': 'processed_run-2/beetle_16.mp4'},
    {'name': 'processed_run-2/beetle_17.mp4', 'path': 'processed_run-2/beetle_17.mp4'},
    {'name': 'processed_run-2/beetle_18.mp4', 'path': 'processed_run-2/beetle_18.mp4'},
    {'name': 'processed_run-2/beetle_19.mp4', 'path': 'processed_run-2/beetle_19.mp4'},
    {'name': 'processed_run-2/beetle_20.mp4', 'path': 'processed_run-2/beetle_20.mp4'},
    {'name': 'processed_run-2/bull_1.mp4', 'path': 'processed_run-2/bull_1.mp4'},
    {'name': 'processed_run-2/bull_2.mp4', 'path': 'processed_run-2/bull_2.mp4'},
    {'name': 'processed_run-2/bull_3.mp4', 'path': 'processed_run-2/bull_3.mp4'},
    {'name': 'processed_run-2/bull_4.mp4', 'path': 'processed_run-2/bull_4.mp4'},
    {'name': 'processed_run-2/bull_5.mp4', 'path': 'processed_run-2/bull_5.mp4'},
    {'name': 'processed_run-2/bull_6.mp4', 'path': 'processed_run-2/bull_6.mp4'},
    {'name': 'processed_run-2/bull_7.mp4', 'path': 'processed_run-2/bull_7.mp4'},
    {'name': 'processed_run-2/bull_8.mp4', 'path': 'processed_run-2/bull_8.mp4'},
    {'name': 'processed_run-2/bull_9.mp4', 'path': 'processed_run-2/bull_9.mp4'},
    {'name': 'processed_run-2/bull_10.mp4', 'path': 'processed_run-2/bull_10.mp4'},
    {'name': 'processed_run-2/bull_11.mp4', 'path': 'processed_run-2/bull_11.mp4'},
    {'name': 'processed_run-2/bull_12.mp4', 'path': 'processed_run-2/bull_12.mp4'},
    {'name': 'processed_run-2/bull_13.mp4', 'path': 'processed_run-2/bull_13.mp4'},
    {'name': 'processed_run-2/bull_14.mp4', 'path': 'processed_run-2/bull_14.mp4'},
    {'name': 'processed_run-2/bull_15.mp4', 'path': 'processed_run-2/bull_15.mp4'},
    {'name': 'processed_run-2/bull_16.mp4', 'path': 'processed_run-2/bull_16.mp4'},
    {'name': 'processed_run-2/bull_17.mp4', 'path': 'processed_run-2/bull_17.mp4'},
    {'name': 'processed_run-2/bull_18.mp4', 'path': 'processed_run-2/bull_18.mp4'},
    {'name': 'processed_run-2/bull_19.mp4', 'path': 'processed_run-2/bull_19.mp4'},
    {'name': 'processed_run-2/bull_20.mp4', 'path': 'processed_run-2/bull_20.mp4'},
    {'name': 'processed_run-2/butterfly_1.mp4', 'path': 'processed_run-2/butterfly_1.mp4'},
    {'name': 'processed_run-2/butterfly_2.mp4', 'path': 'processed_run-2/butterfly_2.mp4'},
    {'name': 'processed_run-2/butterfly_3.mp4', 'path': 'processed_run-2/butterfly_3.mp4'},
    {'name': 'processed_run-2/butterfly_4.mp4', 'path': 'processed_run-2/butterfly_4.mp4'},
    {'name': 'processed_run-2/butterfly_5.mp4', 'path': 'processed_run-2/butterfly_5.mp4'},
    {'name': 'processed_run-2/butterfly_6.mp4', 'path': 'processed_run-2/butterfly_6.mp4'},
    {'name': 'processed_run-2/butterfly_7.mp4', 'path': 'processed_run-2/butterfly_7.mp4'},
    {'name': 'processed_run-2/butterfly_8.mp4', 'path': 'processed_run-2/butterfly_8.mp4'},
    {'name': 'processed_run-2/butterfly_9.mp4', 'path': 'processed_run-2/butterfly_9.mp4'},
    {'name': 'processed_run-2/butterfly_10.mp4', 'path': 'processed_run-2/butterfly_10.mp4'},
    {'name': 'processed_run-2/butterfly_11.mp4', 'path': 'processed_run-2/butterfly_11.mp4'},
    {'name': 'processed_run-2/butterfly_12.mp4', 'path': 'processed_run-2/butterfly_12.mp4'},
    {'name': 'processed_run-2/butterfly_13.mp4', 'path': 'processed_run-2/butterfly_13.mp4'},
    {'name': 'processed_run-2/butterfly_14.mp4', 'path': 'processed_run-2/butterfly_14.mp4'},
    {'name': 'processed_run-2/butterfly_15.mp4', 'path': 'processed_run-2/butterfly_15.mp4'},
    {'name': 'processed_run-2/butterfly_16.mp4', 'path': 'processed_run-2/butterfly_16.mp4'},
    {'name': 'processed_run-2/butterfly_17.mp4', 'path': 'processed_run-2/butterfly_17.mp4'},
    {'name': 'processed_run-2/butterfly_18.mp4', 'path': 'processed_run-2/butterfly_18.mp4'},
    {'name': 'processed_run-2/butterfly_19.mp4', 'path': 'processed_run-2/butterfly_19.mp4'},
    {'name': 'processed_run-2/butterfly_20.mp4', 'path': 'processed_run-2/butterfly_20.mp4'},
    {'name': 'processed_run-2/cat_1.mp4', 'path': 'processed_run-2/cat_1.mp4'},
    {'name': 'processed_run-2/cat_2.mp4', 'path': 'processed_run-2/cat_2.mp4'},
    {'name': 'processed_run-2/cat_3.mp4', 'path': 'processed_run-2/cat_3.mp4'},
    {'name': 'processed_run-2/cat_4.mp4', 'path': 'processed_run-2/cat_4.mp4'},
    {'name': 'processed_run-2/cat_5.mp4', 'path': 'processed_run-2/cat_5.mp4'},
    {'name': 'processed_run-2/cat_6.mp4', 'path': 'processed_run-2/cat_6.mp4'},
    {'name': 'processed_run-2/cat_7.mp4', 'path': 'processed_run-2/cat_7.mp4'},
    {'name': 'processed_run-2/cat_8.mp4', 'path': 'processed_run-2/cat_8.mp4'},
    {'name': 'processed_run-2/cat_9.mp4', 'path': 'processed_run-2/cat_9.mp4'},
    {'name': 'processed_run-2/cat_10.mp4', 'path': 'processed_run-2/cat_10.mp4'},
    {'name': 'processed_run-2/cat_11.mp4', 'path': 'processed_run-2/cat_11.mp4'},
    {'name': 'processed_run-2/cat_12.mp4', 'path': 'processed_run-2/cat_12.mp4'},
    {'name': 'processed_run-2/cat_13.mp4', 'path': 'processed_run-2/cat_13.mp4'},
    {'name': 'processed_run-2/cat_14.mp4', 'path': 'processed_run-2/cat_14.mp4'},
    {'name': 'processed_run-2/cat_15.mp4', 'path': 'processed_run-2/cat_15.mp4'},
    {'name': 'processed_run-2/cat_16.mp4', 'path': 'processed_run-2/cat_16.mp4'},
    {'name': 'processed_run-2/cat_17.mp4', 'path': 'processed_run-2/cat_17.mp4'},
    {'name': 'processed_run-2/cat_18.mp4', 'path': 'processed_run-2/cat_18.mp4'},
    {'name': 'processed_run-2/cat_19.mp4', 'path': 'processed_run-2/cat_19.mp4'},
    {'name': 'processed_run-2/cat_20.mp4', 'path': 'processed_run-2/cat_20.mp4'},
    {'name': 'processed_run-2/crocodile_1.mp4', 'path': 'processed_run-2/crocodile_1.mp4'},
    {'name': 'processed_run-2/crocodile_2.mp4', 'path': 'processed_run-2/crocodile_2.mp4'},
    {'name': 'processed_run-2/crocodile_3.mp4', 'path': 'processed_run-2/crocodile_3.mp4'},
    {'name': 'processed_run-2/crocodile_4.mp4', 'path': 'processed_run-2/crocodile_4.mp4'},
    {'name': 'processed_run-2/crocodile_5.mp4', 'path': 'processed_run-2/crocodile_5.mp4'},
    {'name': 'processed_run-2/crocodile_6.mp4', 'path': 'processed_run-2/crocodile_6.mp4'},
    {'name': 'processed_run-2/crocodile_7.mp4', 'path': 'processed_run-2/crocodile_7.mp4'},
    {'name': 'processed_run-2/crocodile_8.mp4', 'path': 'processed_run-2/crocodile_8.mp4'},
    {'name': 'processed_run-2/crocodile_9.mp4', 'path': 'processed_run-2/crocodile_9.mp4'},
    {'name': 'processed_run-2/crocodile_10.mp4', 'path': 'processed_run-2/crocodile_10.mp4'},
    {'name': 'processed_run-2/crocodile_11.mp4', 'path': 'processed_run-2/crocodile_11.mp4'},
    {'name': 'processed_run-2/crocodile_12.mp4', 'path': 'processed_run-2/crocodile_12.mp4'},
    {'name': 'processed_run-2/crocodile_13.mp4', 'path': 'processed_run-2/crocodile_13.mp4'},
    {'name': 'processed_run-2/crocodile_14.mp4', 'path': 'processed_run-2/crocodile_14.mp4'},
    {'name': 'processed_run-2/crocodile_15.mp4', 'path': 'processed_run-2/crocodile_15.mp4'},
    {'name': 'processed_run-2/crocodile_16.mp4', 'path': 'processed_run-2/crocodile_16.mp4'},
    {'name': 'processed_run-2/crocodile_17.mp4', 'path': 'processed_run-2/crocodile_17.mp4'},
    {'name': 'processed_run-2/crocodile_18.mp4', 'path': 'processed_run-2/crocodile_18.mp4'},
    {'name': 'processed_run-2/crocodile_19.mp4', 'path': 'processed_run-2/crocodile_19.mp4'},
    {'name': 'processed_run-2/crocodile_20.mp4', 'path': 'processed_run-2/crocodile_20.mp4'},
    {'name': 'processed_run-2/dummy.mp4', 'path': 'processed_run-2/dummy.mp4'},
    {'name': 'processed_run-2/millipede_1.mp4', 'path': 'processed_run-2/millipede_1.mp4'},
    {'name': 'processed_run-2/millipede_2.mp4', 'path': 'processed_run-2/millipede_2.mp4'},
    {'name': 'processed_run-2/millipede_3.mp4', 'path': 'processed_run-2/millipede_3.mp4'},
    {'name': 'processed_run-2/millipede_4.mp4', 'path': 'processed_run-2/millipede_4.mp4'},
    {'name': 'processed_run-2/millipede_5.mp4', 'path': 'processed_run-2/millipede_5.mp4'},
    {'name': 'processed_run-2/millipede_6.mp4', 'path': 'processed_run-2/millipede_6.mp4'},
    {'name': 'processed_run-2/millipede_7.mp4', 'path': 'processed_run-2/millipede_7.mp4'},
    {'name': 'processed_run-2/millipede_8.mp4', 'path': 'processed_run-2/millipede_8.mp4'},
    {'name': 'processed_run-2/millipede_9.mp4', 'path': 'processed_run-2/millipede_9.mp4'},
    {'name': 'processed_run-2/millipede_10.mp4', 'path': 'processed_run-2/millipede_10.mp4'},
    {'name': 'processed_run-2/millipede_11.mp4', 'path': 'processed_run-2/millipede_11.mp4'},
    {'name': 'processed_run-2/millipede_12.mp4', 'path': 'processed_run-2/millipede_12.mp4'},
    {'name': 'processed_run-2/millipede_13.mp4', 'path': 'processed_run-2/millipede_13.mp4'},
    {'name': 'processed_run-2/millipede_14.mp4', 'path': 'processed_run-2/millipede_14.mp4'},
    {'name': 'processed_run-2/millipede_15.mp4', 'path': 'processed_run-2/millipede_15.mp4'},
    {'name': 'processed_run-2/millipede_16.mp4', 'path': 'processed_run-2/millipede_16.mp4'},
    {'name': 'processed_run-2/millipede_17.mp4', 'path': 'processed_run-2/millipede_17.mp4'},
    {'name': 'processed_run-2/millipede_18.mp4', 'path': 'processed_run-2/millipede_18.mp4'},
    {'name': 'processed_run-2/millipede_19.mp4', 'path': 'processed_run-2/millipede_19.mp4'},
    {'name': 'processed_run-2/millipede_20.mp4', 'path': 'processed_run-2/millipede_20.mp4'},
    {'name': 'processed_run-2/rabbit_1.mp4', 'path': 'processed_run-2/rabbit_1.mp4'},
    {'name': 'processed_run-2/rabbit_2.mp4', 'path': 'processed_run-2/rabbit_2.mp4'},
    {'name': 'processed_run-2/rabbit_3.mp4', 'path': 'processed_run-2/rabbit_3.mp4'},
    {'name': 'processed_run-2/rabbit_4.mp4', 'path': 'processed_run-2/rabbit_4.mp4'},
    {'name': 'processed_run-2/rabbit_5.mp4', 'path': 'processed_run-2/rabbit_5.mp4'},
    {'name': 'processed_run-2/rabbit_6.mp4', 'path': 'processed_run-2/rabbit_6.mp4'},
    {'name': 'processed_run-2/rabbit_7.mp4', 'path': 'processed_run-2/rabbit_7.mp4'},
    {'name': 'processed_run-2/rabbit_8.mp4', 'path': 'processed_run-2/rabbit_8.mp4'},
    {'name': 'processed_run-2/rabbit_9.mp4', 'path': 'processed_run-2/rabbit_9.mp4'},
    {'name': 'processed_run-2/rabbit_10.mp4', 'path': 'processed_run-2/rabbit_10.mp4'},
    {'name': 'processed_run-2/rabbit_11.mp4', 'path': 'processed_run-2/rabbit_11.mp4'},
    {'name': 'processed_run-2/rabbit_12.mp4', 'path': 'processed_run-2/rabbit_12.mp4'},
    {'name': 'processed_run-2/rabbit_13.mp4', 'path': 'processed_run-2/rabbit_13.mp4'},
    {'name': 'processed_run-2/rabbit_14.mp4', 'path': 'processed_run-2/rabbit_14.mp4'},
    {'name': 'processed_run-2/rabbit_15.mp4', 'path': 'processed_run-2/rabbit_15.mp4'},
    {'name': 'processed_run-2/rabbit_16.mp4', 'path': 'processed_run-2/rabbit_16.mp4'},
    {'name': 'processed_run-2/rabbit_17.mp4', 'path': 'processed_run-2/rabbit_17.mp4'},
    {'name': 'processed_run-2/rabbit_18.mp4', 'path': 'processed_run-2/rabbit_18.mp4'},
    {'name': 'processed_run-2/rabbit_19.mp4', 'path': 'processed_run-2/rabbit_19.mp4'},
    {'name': 'processed_run-2/rabbit_20.mp4', 'path': 'processed_run-2/rabbit_20.mp4'},
    {'name': 'processed_run-2/rat_1.mp4', 'path': 'processed_run-2/rat_1.mp4'},
    {'name': 'processed_run-2/rat_2.mp4', 'path': 'processed_run-2/rat_2.mp4'},
    {'name': 'processed_run-2/rat_3.mp4', 'path': 'processed_run-2/rat_3.mp4'},
    {'name': 'processed_run-2/rat_4.mp4', 'path': 'processed_run-2/rat_4.mp4'},
    {'name': 'processed_run-2/rat_5.mp4', 'path': 'processed_run-2/rat_5.mp4'},
    {'name': 'processed_run-2/rat_6.mp4', 'path': 'processed_run-2/rat_6.mp4'},
    {'name': 'processed_run-2/rat_7.mp4', 'path': 'processed_run-2/rat_7.mp4'},
    {'name': 'processed_run-2/rat_8.mp4', 'path': 'processed_run-2/rat_8.mp4'},
    {'name': 'processed_run-2/rat_9.mp4', 'path': 'processed_run-2/rat_9.mp4'},
    {'name': 'processed_run-2/rat_10.mp4', 'path': 'processed_run-2/rat_10.mp4'},
    {'name': 'processed_run-2/rat_11.mp4', 'path': 'processed_run-2/rat_11.mp4'},
    {'name': 'processed_run-2/rat_12.mp4', 'path': 'processed_run-2/rat_12.mp4'},
    {'name': 'processed_run-2/rat_13.mp4', 'path': 'processed_run-2/rat_13.mp4'},
    {'name': 'processed_run-2/rat_14.mp4', 'path': 'processed_run-2/rat_14.mp4'},
    {'name': 'processed_run-2/rat_15.mp4', 'path': 'processed_run-2/rat_15.mp4'},
    {'name': 'processed_run-2/rat_16.mp4', 'path': 'processed_run-2/rat_16.mp4'},
    {'name': 'processed_run-2/rat_17.mp4', 'path': 'processed_run-2/rat_17.mp4'},
    {'name': 'processed_run-2/rat_18.mp4', 'path': 'processed_run-2/rat_18.mp4'},
    {'name': 'processed_run-2/rat_19.mp4', 'path': 'processed_run-2/rat_19.mp4'},
    {'name': 'processed_run-2/rat_20.mp4', 'path': 'processed_run-2/rat_20.mp4'},
    {'name': 'processed_run-2/tiger_1.mp4', 'path': 'processed_run-2/tiger_1.mp4'},
    {'name': 'processed_run-2/tiger_2.mp4', 'path': 'processed_run-2/tiger_2.mp4'},
    {'name': 'processed_run-2/tiger_3.mp4', 'path': 'processed_run-2/tiger_3.mp4'},
    {'name': 'processed_run-2/tiger_4.mp4', 'path': 'processed_run-2/tiger_4.mp4'},
    {'name': 'processed_run-2/tiger_5.mp4', 'path': 'processed_run-2/tiger_5.mp4'},
    {'name': 'processed_run-2/tiger_6.mp4', 'path': 'processed_run-2/tiger_6.mp4'},
    {'name': 'processed_run-2/tiger_7.mp4', 'path': 'processed_run-2/tiger_7.mp4'},
    {'name': 'processed_run-2/tiger_8.mp4', 'path': 'processed_run-2/tiger_8.mp4'},
    {'name': 'processed_run-2/tiger_9.mp4', 'path': 'processed_run-2/tiger_9.mp4'},
    {'name': 'processed_run-2/tiger_10.mp4', 'path': 'processed_run-2/tiger_10.mp4'},
    {'name': 'processed_run-2/tiger_11.mp4', 'path': 'processed_run-2/tiger_11.mp4'},
    {'name': 'processed_run-2/tiger_12.mp4', 'path': 'processed_run-2/tiger_12.mp4'},
    {'name': 'processed_run-2/tiger_13.mp4', 'path': 'processed_run-2/tiger_13.mp4'},
    {'name': 'processed_run-2/tiger_14.mp4', 'path': 'processed_run-2/tiger_14.mp4'},
    {'name': 'processed_run-2/tiger_15.mp4', 'path': 'processed_run-2/tiger_15.mp4'},
    {'name': 'processed_run-2/tiger_16.mp4', 'path': 'processed_run-2/tiger_16.mp4'},
    {'name': 'processed_run-2/tiger_17.mp4', 'path': 'processed_run-2/tiger_17.mp4'},
    {'name': 'processed_run-2/tiger_18.mp4', 'path': 'processed_run-2/tiger_18.mp4'},
    {'name': 'processed_run-2/tiger_19.mp4', 'path': 'processed_run-2/tiger_19.mp4'},
    {'name': 'processed_run-2/tiger_20.mp4', 'path': 'processed_run-2/tiger_20.mp4'},
    {'name': 'processed_run-2/whale_1.mp4', 'path': 'processed_run-2/whale_1.mp4'},
    {'name': 'processed_run-2/whale_2.mp4', 'path': 'processed_run-2/whale_2.mp4'},
    {'name': 'processed_run-2/whale_3.mp4', 'path': 'processed_run-2/whale_3.mp4'},
    {'name': 'processed_run-2/whale_4.mp4', 'path': 'processed_run-2/whale_4.mp4'},
    {'name': 'processed_run-2/whale_5.mp4', 'path': 'processed_run-2/whale_5.mp4'},
    {'name': 'processed_run-2/whale_6.mp4', 'path': 'processed_run-2/whale_6.mp4'},
    {'name': 'processed_run-2/whale_7.mp4', 'path': 'processed_run-2/whale_7.mp4'},
    {'name': 'processed_run-2/whale_8.mp4', 'path': 'processed_run-2/whale_8.mp4'},
    {'name': 'processed_run-2/whale_9.mp4', 'path': 'processed_run-2/whale_9.mp4'},
    {'name': 'processed_run-2/whale_10.mp4', 'path': 'processed_run-2/whale_10.mp4'},
    {'name': 'processed_run-2/whale_11.mp4', 'path': 'processed_run-2/whale_11.mp4'},
    {'name': 'processed_run-2/whale_12.mp4', 'path': 'processed_run-2/whale_12.mp4'},
    {'name': 'processed_run-2/whale_13.mp4', 'path': 'processed_run-2/whale_13.mp4'},
    {'name': 'processed_run-2/whale_14.mp4', 'path': 'processed_run-2/whale_14.mp4'},
    {'name': 'processed_run-2/whale_15.mp4', 'path': 'processed_run-2/whale_15.mp4'},
    {'name': 'processed_run-2/whale_16.mp4', 'path': 'processed_run-2/whale_16.mp4'},
    {'name': 'processed_run-2/whale_17.mp4', 'path': 'processed_run-2/whale_17.mp4'},
    {'name': 'processed_run-2/whale_18.mp4', 'path': 'processed_run-2/whale_18.mp4'},
    {'name': 'processed_run-2/whale_19.mp4', 'path': 'processed_run-2/whale_19.mp4'},
    {'name': 'processed_run-2/whale_20.mp4', 'path': 'processed_run-2/whale_20.mp4'},
    {'name': 'processed_run-1/bird_1.mp4', 'path': 'processed_run-1/bird_1.mp4'},
    {'name': 'processed_run-1/bird_2.mp4', 'path': 'processed_run-1/bird_2.mp4'},
    {'name': 'processed_run-1/bird_3.mp4', 'path': 'processed_run-1/bird_3.mp4'},
    {'name': 'processed_run-1/bird_4.mp4', 'path': 'processed_run-1/bird_4.mp4'},
    {'name': 'processed_run-1/bird_5.mp4', 'path': 'processed_run-1/bird_5.mp4'},
    {'name': 'processed_run-1/bird_6.mp4', 'path': 'processed_run-1/bird_6.mp4'},
    {'name': 'processed_run-1/bird_7.mp4', 'path': 'processed_run-1/bird_7.mp4'},
    {'name': 'processed_run-1/bird_8.mp4', 'path': 'processed_run-1/bird_8.mp4'},
    {'name': 'processed_run-1/bird_9.mp4', 'path': 'processed_run-1/bird_9.mp4'},
    {'name': 'processed_run-1/bird_10.mp4', 'path': 'processed_run-1/bird_10.mp4'},
    {'name': 'processed_run-1/bird_11.mp4', 'path': 'processed_run-1/bird_11.mp4'},
    {'name': 'processed_run-1/bird_12.mp4', 'path': 'processed_run-1/bird_12.mp4'},
    {'name': 'processed_run-1/bird_13.mp4', 'path': 'processed_run-1/bird_13.mp4'},
    {'name': 'processed_run-1/bird_14.mp4', 'path': 'processed_run-1/bird_14.mp4'},
    {'name': 'processed_run-1/bird_15.mp4', 'path': 'processed_run-1/bird_15.mp4'},
    {'name': 'processed_run-1/bird_16.mp4', 'path': 'processed_run-1/bird_16.mp4'},
    {'name': 'processed_run-1/bird_17.mp4', 'path': 'processed_run-1/bird_17.mp4'},
    {'name': 'processed_run-1/bird_18.mp4', 'path': 'processed_run-1/bird_18.mp4'},
    {'name': 'processed_run-1/bird_19.mp4', 'path': 'processed_run-1/bird_19.mp4'},
    {'name': 'processed_run-1/bird_20.mp4', 'path': 'processed_run-1/bird_20.mp4'},
    {'name': 'processed_run-1/caterpillar_1.mp4', 'path': 'processed_run-1/caterpillar_1.mp4'},
    {'name': 'processed_run-1/caterpillar_2.mp4', 'path': 'processed_run-1/caterpillar_2.mp4'},
    {'name': 'processed_run-1/caterpillar_3.mp4', 'path': 'processed_run-1/caterpillar_3.mp4'},
    {'name': 'processed_run-1/caterpillar_4.mp4', 'path': 'processed_run-1/caterpillar_4.mp4'},
    {'name': 'processed_run-1/caterpillar_5.mp4', 'path': 'processed_run-1/caterpillar_5.mp4'},
    {'name': 'processed_run-1/caterpillar_6.mp4', 'path': 'processed_run-1/caterpillar_6.mp4'},
    {'name': 'processed_run-1/caterpillar_7.mp4', 'path': 'processed_run-1/caterpillar_7.mp4'},
    {'name': 'processed_run-1/caterpillar_8.mp4', 'path': 'processed_run-1/caterpillar_8.mp4'},
    {'name': 'processed_run-1/caterpillar_9.mp4', 'path': 'processed_run-1/caterpillar_9.mp4'},
    {'name': 'processed_run-1/caterpillar_10.mp4', 'path': 'processed_run-1/caterpillar_10.mp4'},
    {'name': 'processed_run-1/caterpillar_11.mp4', 'path': 'processed_run-1/caterpillar_11.mp4'},
    {'name': 'processed_run-1/caterpillar_12.mp4', 'path': 'processed_run-1/caterpillar_12.mp4'},
    {'name': 'processed_run-1/caterpillar_13.mp4', 'path': 'processed_run-1/caterpillar_13.mp4'},
    {'name': 'processed_run-1/caterpillar_14.mp4', 'path': 'processed_run-1/caterpillar_14.mp4'},
    {'name': 'processed_run-1/caterpillar_15.mp4', 'path': 'processed_run-1/caterpillar_15.mp4'},
    {'name': 'processed_run-1/caterpillar_16.mp4', 'path': 'processed_run-1/caterpillar_16.mp4'},
    {'name': 'processed_run-1/caterpillar_17.mp4', 'path': 'processed_run-1/caterpillar_17.mp4'},
    {'name': 'processed_run-1/caterpillar_18.mp4', 'path': 'processed_run-1/caterpillar_18.mp4'},
    {'name': 'processed_run-1/caterpillar_19.mp4', 'path': 'processed_run-1/caterpillar_19.mp4'},
    {'name': 'processed_run-1/caterpillar_20.mp4', 'path': 'processed_run-1/caterpillar_20.mp4'},
    {'name': 'processed_run-1/dog_1.mp4', 'path': 'processed_run-1/dog_1.mp4'},
    {'name': 'processed_run-1/dog_2.mp4', 'path': 'processed_run-1/dog_2.mp4'},
    {'name': 'processed_run-1/dog_3.mp4', 'path': 'processed_run-1/dog_3.mp4'},
    {'name': 'processed_run-1/dog_4.mp4', 'path': 'processed_run-1/dog_4.mp4'},
    {'name': 'processed_run-1/dog_5.mp4', 'path': 'processed_run-1/dog_5.mp4'},
    {'name': 'processed_run-1/dog_6.mp4', 'path': 'processed_run-1/dog_6.mp4'},
    {'name': 'processed_run-1/dog_7.mp4', 'path': 'processed_run-1/dog_7.mp4'},
    {'name': 'processed_run-1/dog_8.mp4', 'path': 'processed_run-1/dog_8.mp4'},
    {'name': 'processed_run-1/dog_9.mp4', 'path': 'processed_run-1/dog_9.mp4'},
    {'name': 'processed_run-1/dog_10.mp4', 'path': 'processed_run-1/dog_10.mp4'},
    {'name': 'processed_run-1/dog_11.mp4', 'path': 'processed_run-1/dog_11.mp4'},
    {'name': 'processed_run-1/dog_12.mp4', 'path': 'processed_run-1/dog_12.mp4'},
    {'name': 'processed_run-1/dog_13.mp4', 'path': 'processed_run-1/dog_13.mp4'},
    {'name': 'processed_run-1/dog_14.mp4', 'path': 'processed_run-1/dog_14.mp4'},
    {'name': 'processed_run-1/dog_15.mp4', 'path': 'processed_run-1/dog_15.mp4'},
    {'name': 'processed_run-1/dog_16.mp4', 'path': 'processed_run-1/dog_16.mp4'},
    {'name': 'processed_run-1/dog_17.mp4', 'path': 'processed_run-1/dog_17.mp4'},
    {'name': 'processed_run-1/dog_18.mp4', 'path': 'processed_run-1/dog_18.mp4'},
    {'name': 'processed_run-1/dog_19.mp4', 'path': 'processed_run-1/dog_19.mp4'},
    {'name': 'processed_run-1/dog_20.mp4', 'path': 'processed_run-1/dog_20.mp4'},
    {'name': 'processed_run-1/dummy.mp4', 'path': 'processed_run-1/dummy.mp4'},
    {'name': 'processed_run-1/fish_1.mp4', 'path': 'processed_run-1/fish_1.mp4'},
    {'name': 'processed_run-1/fish_2.mp4', 'path': 'processed_run-1/fish_2.mp4'},
    {'name': 'processed_run-1/fish_3.mp4', 'path': 'processed_run-1/fish_3.mp4'},
    {'name': 'processed_run-1/fish_4.mp4', 'path': 'processed_run-1/fish_4.mp4'},
    {'name': 'processed_run-1/fish_5.mp4', 'path': 'processed_run-1/fish_5.mp4'},
    {'name': 'processed_run-1/fish_6.mp4', 'path': 'processed_run-1/fish_6.mp4'},
    {'name': 'processed_run-1/fish_7.mp4', 'path': 'processed_run-1/fish_7.mp4'},
    {'name': 'processed_run-1/fish_8.mp4', 'path': 'processed_run-1/fish_8.mp4'},
    {'name': 'processed_run-1/fish_9.mp4', 'path': 'processed_run-1/fish_9.mp4'},
    {'name': 'processed_run-1/fish_10.mp4', 'path': 'processed_run-1/fish_10.mp4'},
    {'name': 'processed_run-1/fish_11.mp4', 'path': 'processed_run-1/fish_11.mp4'},
    {'name': 'processed_run-1/fish_12.mp4', 'path': 'processed_run-1/fish_12.mp4'},
    {'name': 'processed_run-1/fish_13.mp4', 'path': 'processed_run-1/fish_13.mp4'},
    {'name': 'processed_run-1/fish_14.mp4', 'path': 'processed_run-1/fish_14.mp4'},
    {'name': 'processed_run-1/fish_15.mp4', 'path': 'processed_run-1/fish_15.mp4'},
    {'name': 'processed_run-1/fish_16.mp4', 'path': 'processed_run-1/fish_16.mp4'},
    {'name': 'processed_run-1/fish_17.mp4', 'path': 'processed_run-1/fish_17.mp4'},
    {'name': 'processed_run-1/fish_18.mp4', 'path': 'processed_run-1/fish_18.mp4'},
    {'name': 'processed_run-1/fish_19.mp4', 'path': 'processed_run-1/fish_19.mp4'},
    {'name': 'processed_run-1/fish_20.mp4', 'path': 'processed_run-1/fish_20.mp4'},
    {'name': 'processed_run-1/frog_1.mp4', 'path': 'processed_run-1/frog_1.mp4'},
    {'name': 'processed_run-1/frog_2.mp4', 'path': 'processed_run-1/frog_2.mp4'},
    {'name': 'processed_run-1/frog_3.mp4', 'path': 'processed_run-1/frog_3.mp4'},
    {'name': 'processed_run-1/frog_4.mp4', 'path': 'processed_run-1/frog_4.mp4'},
    {'name': 'processed_run-1/frog_5.mp4', 'path': 'processed_run-1/frog_5.mp4'},
    {'name': 'processed_run-1/frog_6.mp4', 'path': 'processed_run-1/frog_6.mp4'},
    {'name': 'processed_run-1/frog_7.mp4', 'path': 'processed_run-1/frog_7.mp4'},
    {'name': 'processed_run-1/frog_8.mp4', 'path': 'processed_run-1/frog_8.mp4'},
    {'name': 'processed_run-1/frog_9.mp4', 'path': 'processed_run-1/frog_9.mp4'},
    {'name': 'processed_run-1/frog_10.mp4', 'path': 'processed_run-1/frog_10.mp4'},
    {'name': 'processed_run-1/frog_11.mp4', 'path': 'processed_run-1/frog_11.mp4'},
    {'name': 'processed_run-1/frog_12.mp4', 'path': 'processed_run-1/frog_12.mp4'},
    {'name': 'processed_run-1/frog_13.mp4', 'path': 'processed_run-1/frog_13.mp4'},
    {'name': 'processed_run-1/frog_14.mp4', 'path': 'processed_run-1/frog_14.mp4'},
    {'name': 'processed_run-1/frog_15.mp4', 'path': 'processed_run-1/frog_15.mp4'},
    {'name': 'processed_run-1/frog_16.mp4', 'path': 'processed_run-1/frog_16.mp4'},
    {'name': 'processed_run-1/frog_17.mp4', 'path': 'processed_run-1/frog_17.mp4'},
    {'name': 'processed_run-1/frog_18.mp4', 'path': 'processed_run-1/frog_18.mp4'},
    {'name': 'processed_run-1/frog_19.mp4', 'path': 'processed_run-1/frog_19.mp4'},
    {'name': 'processed_run-1/frog_20.mp4', 'path': 'processed_run-1/frog_20.mp4'},
    {'name': 'processed_run-1/horse_1.mp4', 'path': 'processed_run-1/horse_1.mp4'},
    {'name': 'processed_run-1/horse_2.mp4', 'path': 'processed_run-1/horse_2.mp4'},
    {'name': 'processed_run-1/horse_3.mp4', 'path': 'processed_run-1/horse_3.mp4'},
    {'name': 'processed_run-1/horse_4.mp4', 'path': 'processed_run-1/horse_4.mp4'},
    {'name': 'processed_run-1/horse_5.mp4', 'path': 'processed_run-1/horse_5.mp4'},
    {'name': 'processed_run-1/horse_6.mp4', 'path': 'processed_run-1/horse_6.mp4'},
    {'name': 'processed_run-1/horse_7.mp4', 'path': 'processed_run-1/horse_7.mp4'},
    {'name': 'processed_run-1/horse_8.mp4', 'path': 'processed_run-1/horse_8.mp4'},
    {'name': 'processed_run-1/horse_9.mp4', 'path': 'processed_run-1/horse_9.mp4'},
    {'name': 'processed_run-1/horse_10.mp4', 'path': 'processed_run-1/horse_10.mp4'},
    {'name': 'processed_run-1/horse_11.mp4', 'path': 'processed_run-1/horse_11.mp4'},
    {'name': 'processed_run-1/horse_12.mp4', 'path': 'processed_run-1/horse_12.mp4'},
    {'name': 'processed_run-1/horse_13.mp4', 'path': 'processed_run-1/horse_13.mp4'},
    {'name': 'processed_run-1/horse_14.mp4', 'path': 'processed_run-1/horse_14.mp4'},
    {'name': 'processed_run-1/horse_15.mp4', 'path': 'processed_run-1/horse_15.mp4'},
    {'name': 'processed_run-1/horse_16.mp4', 'path': 'processed_run-1/horse_16.mp4'},
    {'name': 'processed_run-1/horse_17.mp4', 'path': 'processed_run-1/horse_17.mp4'},
    {'name': 'processed_run-1/horse_18.mp4', 'path': 'processed_run-1/horse_18.mp4'},
    {'name': 'processed_run-1/horse_19.mp4', 'path': 'processed_run-1/horse_19.mp4'},
    {'name': 'processed_run-1/horse_20.mp4', 'path': 'processed_run-1/horse_20.mp4'},
    {'name': 'processed_run-1/shark_1.mp4', 'path': 'processed_run-1/shark_1.mp4'},
    {'name': 'processed_run-1/shark_2.mp4', 'path': 'processed_run-1/shark_2.mp4'},
    {'name': 'processed_run-1/shark_3.mp4', 'path': 'processed_run-1/shark_3.mp4'},
    {'name': 'processed_run-1/shark_4.mp4', 'path': 'processed_run-1/shark_4.mp4'},
    {'name': 'processed_run-1/shark_5.mp4', 'path': 'processed_run-1/shark_5.mp4'},
    {'name': 'processed_run-1/shark_6.mp4', 'path': 'processed_run-1/shark_6.mp4'},
    {'name': 'processed_run-1/shark_7.mp4', 'path': 'processed_run-1/shark_7.mp4'},
    {'name': 'processed_run-1/shark_8.mp4', 'path': 'processed_run-1/shark_8.mp4'},
    {'name': 'processed_run-1/shark_9.mp4', 'path': 'processed_run-1/shark_9.mp4'},
    {'name': 'processed_run-1/shark_10.mp4', 'path': 'processed_run-1/shark_10.mp4'},
    {'name': 'processed_run-1/shark_11.mp4', 'path': 'processed_run-1/shark_11.mp4'},
    {'name': 'processed_run-1/shark_12.mp4', 'path': 'processed_run-1/shark_12.mp4'},
    {'name': 'processed_run-1/shark_13.mp4', 'path': 'processed_run-1/shark_13.mp4'},
    {'name': 'processed_run-1/shark_14.mp4', 'path': 'processed_run-1/shark_14.mp4'},
    {'name': 'processed_run-1/shark_15.mp4', 'path': 'processed_run-1/shark_15.mp4'},
    {'name': 'processed_run-1/shark_16.mp4', 'path': 'processed_run-1/shark_16.mp4'},
    {'name': 'processed_run-1/shark_17.mp4', 'path': 'processed_run-1/shark_17.mp4'},
    {'name': 'processed_run-1/shark_18.mp4', 'path': 'processed_run-1/shark_18.mp4'},
    {'name': 'processed_run-1/shark_19.mp4', 'path': 'processed_run-1/shark_19.mp4'},
    {'name': 'processed_run-1/shark_20.mp4', 'path': 'processed_run-1/shark_20.mp4'},
    {'name': 'processed_run-1/snake_1.mp4', 'path': 'processed_run-1/snake_1.mp4'},
    {'name': 'processed_run-1/snake_2.mp4', 'path': 'processed_run-1/snake_2.mp4'},
    {'name': 'processed_run-1/snake_3.mp4', 'path': 'processed_run-1/snake_3.mp4'},
    {'name': 'processed_run-1/snake_4.mp4', 'path': 'processed_run-1/snake_4.mp4'},
    {'name': 'processed_run-1/snake_5.mp4', 'path': 'processed_run-1/snake_5.mp4'},
    {'name': 'processed_run-1/snake_6.mp4', 'path': 'processed_run-1/snake_6.mp4'},
    {'name': 'processed_run-1/snake_7.mp4', 'path': 'processed_run-1/snake_7.mp4'},
    {'name': 'processed_run-1/snake_8.mp4', 'path': 'processed_run-1/snake_8.mp4'},
    {'name': 'processed_run-1/snake_9.mp4', 'path': 'processed_run-1/snake_9.mp4'},
    {'name': 'processed_run-1/snake_10.mp4', 'path': 'processed_run-1/snake_10.mp4'},
    {'name': 'processed_run-1/snake_11.mp4', 'path': 'processed_run-1/snake_11.mp4'},
    {'name': 'processed_run-1/snake_12.mp4', 'path': 'processed_run-1/snake_12.mp4'},
    {'name': 'processed_run-1/snake_13.mp4', 'path': 'processed_run-1/snake_13.mp4'},
    {'name': 'processed_run-1/snake_14.mp4', 'path': 'processed_run-1/snake_14.mp4'},
    {'name': 'processed_run-1/snake_15.mp4', 'path': 'processed_run-1/snake_15.mp4'},
    {'name': 'processed_run-1/snake_16.mp4', 'path': 'processed_run-1/snake_16.mp4'},
    {'name': 'processed_run-1/snake_17.mp4', 'path': 'processed_run-1/snake_17.mp4'},
    {'name': 'processed_run-1/snake_18.mp4', 'path': 'processed_run-1/snake_18.mp4'},
    {'name': 'processed_run-1/snake_19.mp4', 'path': 'processed_run-1/snake_19.mp4'},
    {'name': 'processed_run-1/snake_20.mp4', 'path': 'processed_run-1/snake_20.mp4'},
    {'name': 'processed_run-1/spider_1.mp4', 'path': 'processed_run-1/spider_1.mp4'},
    {'name': 'processed_run-1/spider_2.mp4', 'path': 'processed_run-1/spider_2.mp4'},
    {'name': 'processed_run-1/spider_3.mp4', 'path': 'processed_run-1/spider_3.mp4'},
    {'name': 'processed_run-1/spider_4.mp4', 'path': 'processed_run-1/spider_4.mp4'},
    {'name': 'processed_run-1/spider_5.mp4', 'path': 'processed_run-1/spider_5.mp4'},
    {'name': 'processed_run-1/spider_6.mp4', 'path': 'processed_run-1/spider_6.mp4'},
    {'name': 'processed_run-1/spider_7.mp4', 'path': 'processed_run-1/spider_7.mp4'},
    {'name': 'processed_run-1/spider_8.mp4', 'path': 'processed_run-1/spider_8.mp4'},
    {'name': 'processed_run-1/spider_9.mp4', 'path': 'processed_run-1/spider_9.mp4'},
    {'name': 'processed_run-1/spider_10.mp4', 'path': 'processed_run-1/spider_10.mp4'},
    {'name': 'processed_run-1/spider_11.mp4', 'path': 'processed_run-1/spider_11.mp4'},
    {'name': 'processed_run-1/spider_12.mp4', 'path': 'processed_run-1/spider_12.mp4'},
    {'name': 'processed_run-1/spider_13.mp4', 'path': 'processed_run-1/spider_13.mp4'},
    {'name': 'processed_run-1/spider_14.mp4', 'path': 'processed_run-1/spider_14.mp4'},
    {'name': 'processed_run-1/spider_15.mp4', 'path': 'processed_run-1/spider_15.mp4'},
    {'name': 'processed_run-1/spider_16.mp4', 'path': 'processed_run-1/spider_16.mp4'},
    {'name': 'processed_run-1/spider_17.mp4', 'path': 'processed_run-1/spider_17.mp4'},
    {'name': 'processed_run-1/spider_18.mp4', 'path': 'processed_run-1/spider_18.mp4'},
    {'name': 'processed_run-1/spider_19.mp4', 'path': 'processed_run-1/spider_19.mp4'},
    {'name': 'processed_run-1/spider_20.mp4', 'path': 'processed_run-1/spider_20.mp4'},
    {'name': 'processed_run-1/wasp_1.mp4', 'path': 'processed_run-1/wasp_1.mp4'},
    {'name': 'processed_run-1/wasp_2.mp4', 'path': 'processed_run-1/wasp_2.mp4'},
    {'name': 'processed_run-1/wasp_3.mp4', 'path': 'processed_run-1/wasp_3.mp4'},
    {'name': 'processed_run-1/wasp_4.mp4', 'path': 'processed_run-1/wasp_4.mp4'},
    {'name': 'processed_run-1/wasp_5.mp4', 'path': 'processed_run-1/wasp_5.mp4'},
    {'name': 'processed_run-1/wasp_6.mp4', 'path': 'processed_run-1/wasp_6.mp4'},
    {'name': 'processed_run-1/wasp_7.mp4', 'path': 'processed_run-1/wasp_7.mp4'},
    {'name': 'processed_run-1/wasp_8.mp4', 'path': 'processed_run-1/wasp_8.mp4'},
    {'name': 'processed_run-1/wasp_9.mp4', 'path': 'processed_run-1/wasp_9.mp4'},
    {'name': 'processed_run-1/wasp_10.mp4', 'path': 'processed_run-1/wasp_10.mp4'},
    {'name': 'processed_run-1/wasp_11.mp4', 'path': 'processed_run-1/wasp_11.mp4'},
    {'name': 'processed_run-1/wasp_12.mp4', 'path': 'processed_run-1/wasp_12.mp4'},
    {'name': 'processed_run-1/wasp_13.mp4', 'path': 'processed_run-1/wasp_13.mp4'},
    {'name': 'processed_run-1/wasp_14.mp4', 'path': 'processed_run-1/wasp_14.mp4'},
    {'name': 'processed_run-1/wasp_15.mp4', 'path': 'processed_run-1/wasp_15.mp4'},
    {'name': 'processed_run-1/wasp_16.mp4', 'path': 'processed_run-1/wasp_16.mp4'},
    {'name': 'processed_run-1/wasp_17.mp4', 'path': 'processed_run-1/wasp_17.mp4'},
    {'name': 'processed_run-1/wasp_18.mp4', 'path': 'processed_run-1/wasp_18.mp4'},
    {'name': 'processed_run-1/wasp_19.mp4', 'path': 'processed_run-1/wasp_19.mp4'},
    {'name': 'processed_run-1/wasp_20.mp4', 'path': 'processed_run-1/wasp_20.mp4'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var waiting_for_scannerClock;
var key_resp_start;
var participant;
var stimuli;
var text;
var fixation_2Clock;
var text_2;
var trialClock;
var movieClock;
var movie;
var ratingsClock;
var fear_slider;
var fear_text;
var disgust_slider;
var cute_slider;
var disgust_text;
var cute_text;
var button;
var button_text;
var washoutClock;
var fixation;
var endClock;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "waiting_for_scanner"
  waiting_for_scannerClock = new util.Clock();
  key_resp_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  participant = expInfo["participant"];
  stimuli = expInfo["stimuli"];
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You will be presented with the videos you saw in the scanner.\n\nAfter each video, please provide subjective ratings of three attributes:\n\nFearfulness, disgustingness, and cuteness.\n\nPress [SPACE] to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "fixation_2"
  fixation_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  movieClock = new util.Clock();
  movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1.5, 1.0],
    ori: 0.0,
    opacity: 1.0,
    loop: false,
    noAudio: true,
    depth: 0
    });
  // Initialize components for Routine "ratings"
  ratingsClock = new util.Clock();
  fear_slider = new visual.Slider({
    win: psychoJS.window, name: 'fear_slider',
    startValue: 0,
    size: [1.0, 0.05], pos: [0, 0.2], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('DarkGray'), lineColor: new util.Color('Black'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  fear_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fear_text',
    text: 'Fear',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  disgust_slider = new visual.Slider({
    win: psychoJS.window, name: 'disgust_slider',
    startValue: 0,
    size: [1.0, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('DarkGray'), lineColor: new util.Color('Black'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  cute_slider = new visual.Slider({
    win: psychoJS.window, name: 'cute_slider',
    startValue: 0,
    size: [1.0, 0.05], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('DarkGray'), lineColor: new util.Color('Black'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  disgust_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'disgust_text',
    text: 'Disgust',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  cute_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cute_text',
    text: 'Cuteness',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'Done',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.1],
    depth: -7
  });
  button.clock = new util.Clock();
  
  button_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'button_text',
    text: 'Done',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "washout"
  washoutClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Ratings complete. Thank you!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_start_allKeys;
var waiting_for_scannerComponents;
function waiting_for_scannerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'waiting_for_scanner' ---
    t = 0;
    waiting_for_scannerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('waiting_for_scanner.started', globalClock.getTime());
    key_resp_start.keys = undefined;
    key_resp_start.rt = undefined;
    _key_resp_start_allKeys = [];
    // keep track of which components have finished
    waiting_for_scannerComponents = [];
    waiting_for_scannerComponents.push(key_resp_start);
    waiting_for_scannerComponents.push(text);
    
    for (const thisComponent of waiting_for_scannerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function waiting_for_scannerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'waiting_for_scanner' ---
    // get current time
    t = waiting_for_scannerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_start* updates
    if (t >= 0.0 && key_resp_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_start.tStart = t;  // (not accounting for frame time here)
      key_resp_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_start.clearEvents(); });
    }
    
    if (key_resp_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_start.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_start_allKeys = _key_resp_start_allKeys.concat(theseKeys);
      if (_key_resp_start_allKeys.length > 0) {
        key_resp_start.keys = _key_resp_start_allKeys[_key_resp_start_allKeys.length - 1].name;  // just the last key pressed
        key_resp_start.rt = _key_resp_start_allKeys[_key_resp_start_allKeys.length - 1].rt;
        key_resp_start.duration = _key_resp_start_allKeys[_key_resp_start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of waiting_for_scannerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function waiting_for_scannerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'waiting_for_scanner' ---
    for (const thisComponent of waiting_for_scannerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('waiting_for_scanner.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_start.corr, level);
    }
    psychoJS.experiment.addData('key_resp_start.keys', key_resp_start.keys);
    if (typeof key_resp_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_start.rt', key_resp_start.rt);
        psychoJS.experiment.addData('key_resp_start.duration', key_resp_start.duration);
        routineTimer.reset();
        }
    
    key_resp_start.stop();
    // the Routine "waiting_for_scanner" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation_2Components;
function fixation_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation_2' ---
    t = 0;
    fixation_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation_2.started', globalClock.getTime());
    // keep track of which components have finished
    fixation_2Components = [];
    fixation_2Components.push(text_2);
    
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation_2' ---
    // get current time
    t = fixation_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation_2' ---
    for (const thisComponent of fixation_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation_2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 200, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("conditions_run-" + stimuli) + ".csv"),
      seed: participant, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(ratingsRoutineBegin(snapshot));
      trialsLoopScheduler.add(ratingsRoutineEachFrame());
      trialsLoopScheduler.add(ratingsRoutineEnd(snapshot));
      trialsLoopScheduler.add(washoutRoutineBegin(snapshot));
      trialsLoopScheduler.add(washoutRoutineEachFrame());
      trialsLoopScheduler.add(washoutRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    movie.setMovie(file);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(movie);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie* updates
    if (t >= 0.0 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
      movie.play();
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (movie.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      movie.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    movie.stop();  // ensure movie has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ratingsComponents;
function ratingsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ratings' ---
    t = 0;
    ratingsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ratings.started', globalClock.getTime());
    fear_slider.reset()
    disgust_slider.reset()
    cute_slider.reset()
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    // keep track of which components have finished
    ratingsComponents = [];
    ratingsComponents.push(fear_slider);
    ratingsComponents.push(fear_text);
    ratingsComponents.push(disgust_slider);
    ratingsComponents.push(cute_slider);
    ratingsComponents.push(disgust_text);
    ratingsComponents.push(cute_text);
    ratingsComponents.push(button);
    ratingsComponents.push(button_text);
    
    for (const thisComponent of ratingsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ratingsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ratings' ---
    // get current time
    t = ratingsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fear_slider* updates
    if (t >= 0.0 && fear_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fear_slider.tStart = t;  // (not accounting for frame time here)
      fear_slider.frameNStart = frameN;  // exact frame index
      
      fear_slider.setAutoDraw(true);
    }
    
    
    // *fear_text* updates
    if (t >= 0.0 && fear_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fear_text.tStart = t;  // (not accounting for frame time here)
      fear_text.frameNStart = frameN;  // exact frame index
      
      fear_text.setAutoDraw(true);
    }
    
    
    // *disgust_slider* updates
    if (t >= 0.0 && disgust_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disgust_slider.tStart = t;  // (not accounting for frame time here)
      disgust_slider.frameNStart = frameN;  // exact frame index
      
      disgust_slider.setAutoDraw(true);
    }
    
    
    // *cute_slider* updates
    if (t >= 0.0 && cute_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cute_slider.tStart = t;  // (not accounting for frame time here)
      cute_slider.frameNStart = frameN;  // exact frame index
      
      cute_slider.setAutoDraw(true);
    }
    
    
    // *disgust_text* updates
    if (t >= 0.0 && disgust_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disgust_text.tStart = t;  // (not accounting for frame time here)
      disgust_text.frameNStart = frameN;  // exact frame index
      
      disgust_text.setAutoDraw(true);
    }
    
    
    // *cute_text* updates
    if (t >= 0.0 && cute_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cute_text.tStart = t;  // (not accounting for frame time here)
      cute_text.frameNStart = frameN;  // exact frame index
      
      cute_text.setAutoDraw(true);
    }
    
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          button.numClicks += 1;
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    
    // *button_text* updates
    if (t >= 0.0 && button_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_text.tStart = t;  // (not accounting for frame time here)
      button_text.frameNStart = frameN;  // exact frame index
      
      button_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ratingsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ratingsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ratings' ---
    for (const thisComponent of ratingsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ratings.stopped', globalClock.getTime());
    // Run 'End Routine' code from ratings_code
    /* Syntax Error: Fix Python code */
    psychoJS.experiment.addData('fear_slider.response', fear_slider.getRating());
    psychoJS.experiment.addData('fear_slider.rt', fear_slider.getRT());
    psychoJS.experiment.addData('disgust_slider.response', disgust_slider.getRating());
    psychoJS.experiment.addData('disgust_slider.rt', disgust_slider.getRT());
    psychoJS.experiment.addData('cute_slider.response', cute_slider.getRating());
    psychoJS.experiment.addData('cute_slider.rt', cute_slider.getRT());
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "ratings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var washoutComponents;
function washoutRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'washout' ---
    t = 0;
    washoutClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('washout.started', globalClock.getTime());
    // keep track of which components have finished
    washoutComponents = [];
    washoutComponents.push(fixation);
    
    for (const thisComponent of washoutComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function washoutRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'washout' ---
    // get current time
    t = washoutClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of washoutComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function washoutRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'washout' ---
    for (const thisComponent of washoutComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('washout.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
