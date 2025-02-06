#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.3),
    on February 06, 2025, at 12:52
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# Run 'Before Experiment' code from code
from glob import glob
import pandas as pd
import numpy as np
import os


#num_stimuli = 100


# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.3'
expName = 'video_presentation'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '999',
    'run': '999',
    'num_stimuli': '100',
    'date': data.getDateStr(),  # add a simple timestamp
    'expName': expName,
    'psychopyVersion': psychopyVersion,
}


def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # temporarily remove keys which the dialog doesn't need to show
    poppedKeys = {
        'date': expInfo.pop('date', data.getDateStr()),
        'expName': expInfo.pop('expName', expName),
        'psychopyVersion': expInfo.pop('psychopyVersion', psychopyVersion),
    }
    # show participant info dialog
    dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # restore hidden keys
    expInfo.update(poppedKeys)
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\dariu\\Documents\\PhD\\ImageGeneration\\repo\\decoder-construction\\psychopy\\video_presentation_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(logging.EXP)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=logging.EXP)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1920, 1080], fullscr=True, screen=1,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.mouseVisible = False
    win.hideMessage()
    return win


def setupInputs(expInfo, thisExp, win):
    """
    Setup whatever inputs are available (mouse, keyboard, eyetracker, etc.)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    dict
        Dictionary of input devices by name.
    """
    # --- Setup input devices ---
    inputs = {}
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    eyetracker = None
    
    # create a default keyboard (e.g. to check for escape)
    defaultKeyboard = keyboard.Keyboard(backend='iohub')
    # return inputs dict
    return {
        'ioServer': ioServer,
        'defaultKeyboard': defaultKeyboard,
        'eyetracker': eyetracker,
    }

def pauseExperiment(thisExp, inputs=None, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # make sure we have a keyboard
        if inputs is None:
            inputs = {
                'defaultKeyboard': keyboard.Keyboard(backend='ioHub')
            }
        # check for quit (typically the Esc key)
        if inputs['defaultKeyboard'].getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win, inputs=inputs)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, inputs=inputs, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, inputs, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    inputs : dict
        Dictionary of input devices by name.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = inputs['ioServer']
    defaultKeyboard = inputs['defaultKeyboard']
    eyetracker = inputs['eyetracker']
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "waiting_for_scanner" ---
    key_resp_start = keyboard.Keyboard()
    # Run 'Begin Experiment' code from code
    participant = expInfo['participant']
    session = expInfo['session']
    run = expInfo['run']
    
    num_stimuli = int(expInfo["num_stimuli"])
    if num_stimuli % 2 != 0:
        raise Exception("Num stimuli must be positive!")
    
    rating_order = np.random.choice([1,2], 2, replace=False)
    rating_dicts = [
        {"1": 0, "2": 1, "3": 2, "4": 3, "6": 4},
        {"1": 4, "2": 3, "3": 2, "4": 1, "6": 0}
        ]
    rating_dict = rating_dicts[rating_order[0] - 1]
    
    # Get images
    video_path = "videos"
    #video_list = os.listdir(video_path)
    video_list = [os.path.basename(file) for file in glob("videos/*/*.mp4")]
    
    # Intialize dataframe
    df = pd.DataFrame()
    df["file"] = video_list
    df["category"] = [file.split("_")[0] for file in video_list]
    
    # Get videos at random
    random_indices = np.random.choice(np.arange(len(video_list)), size=num_stimuli, replace=False)
    df = df.iloc[random_indices, :]
    
    # Random shuffle
    df = df.sample(frac=1).reset_index(drop=True)
    
    df["onset"] = np.empty(num_stimuli) * np.nan
    df["duration"] = np.empty(num_stimuli) * np.nan
    df["rating"] = np.empty(num_stimuli) * np.nan
    df["response_time"] = np.empty(num_stimuli) * np.nan
    df["rating_order"] = np.repeat(rating_order, num_stimuli/2)
    df["button"] = np.empty(num_stimuli) * np.nan
    
    text = visual.TextStim(win=win, name='text',
        text='After each video, you will see a black square. You will have 5 seconds to make a rating on the remote according to the system below.\n\nAt the halfway point, you will be asked to reverse the rating scale',
        font='Open Sans',
        pos=(0, 0.25), height=0.04, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        flipHoriz=True, depth=-2.0);
    instruction_image = visual.ImageStim(
        win=win,
        name='instruction_image', 
        image=f"images/rating_instruction_{rating_order[0]}.png", mask=None, anchor='center',
        ori=0.0, pos=(0, -0.15), size=(0.75, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=True, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    
    # --- Initialize components for Routine "dummy" ---
    dummy_fixation_cross = visual.ShapeStim(
        win=win, name='dummy_fixation_cross', vertices='cross',
        size=(0.05, 0.05),
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
        opacity=None, depth=0.0, interpolate=True)
    
    # --- Initialize components for Routine "rating_switch" ---
    rating_instruction_img = visual.ImageStim(
        win=win,
        name='rating_instruction_img', 
        image=f"images/rating_instruction_{rating_order[1]}.png", mask=None, anchor='center',
        ori=0.0, pos=(0, -0.15), size=(0.75, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=True, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    rating_instruction_text = visual.TextStim(win=win, name='rating_instruction_text',
        text='For the rest of this run, please reverse the way you rate the videos. Use the rating system below.\n\nPress any button to continue.',
        font='Open Sans',
        pos=(0, 0.25), height=0.04, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        flipHoriz=True, depth=-1.0);
    rating_instruction_key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "washout" ---
    washout_fixation_cross = visual.ShapeStim(
        win=win, name='washout_fixation_cross', vertices='cross',
        size=(0.05, 0.05),
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
        opacity=None, depth=0.0, interpolate=True)
    
    # --- Initialize components for Routine "trial" ---
    
    # --- Initialize components for Routine "rating" ---
    rating_fixation_square = visual.Rect(
        win=win, name='rating_fixation_square',
        width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
        opacity=None, depth=-1.0, interpolate=True)
    
    # --- Initialize components for Routine "washout" ---
    washout_fixation_cross = visual.ShapeStim(
        win=win, name='washout_fixation_cross', vertices='cross',
        size=(0.05, 0.05),
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
        opacity=None, depth=0.0, interpolate=True)
    
    # --- Initialize components for Routine "end" ---
    end_text = visual.TextStim(win=win, name='end_text',
        text='Run complete.',
        font='Open Sans',
        pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        flipHoriz=True, depth=0.0);
    
    # create some handy timers
    if globalClock is None:
        globalClock = core.Clock()  # to track the time since experiment started
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6)
    
    # --- Prepare to start Routine "waiting_for_scanner" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('waiting_for_scanner.started', globalClock.getTime())
    key_resp_start.keys = []
    key_resp_start.rt = []
    _key_resp_start_allKeys = []
    # keep track of which components have finished
    waiting_for_scannerComponents = [key_resp_start, text, instruction_image]
    for thisComponent in waiting_for_scannerComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "waiting_for_scanner" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_start* updates
        waitOnFlip = False
        
        # if key_resp_start is starting this frame...
        if key_resp_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_start.frameNStart = frameN  # exact frame index
            key_resp_start.tStart = t  # local t and not account for scr refresh
            key_resp_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_start, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_start.started')
            # update status
            key_resp_start.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_start.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_start.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_start.getKeys(keyList=['5'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_start_allKeys.extend(theseKeys)
            if len(_key_resp_start_allKeys):
                key_resp_start.keys = _key_resp_start_allKeys[-1].name  # just the last key pressed
                key_resp_start.rt = _key_resp_start_allKeys[-1].rt
                key_resp_start.duration = _key_resp_start_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        # Run 'Each Frame' code from code
        ## Define key mapping
        #x_pos_dict = {"1": -0.2, "2": -0.1, "3": 0, "4": 0.1, "6": 0.2}
        #
        ## Get kepress
        #keys = event.getKeys(keyList=['1', '2', '3', '4', '6'])
        #
        #if keys:
        #    if not 'marker' in locals():
        #        x_pos = x_pos_dict[keys[0]]
        #        marker = visual.ShapeStim(win=win, pos=(0, -0.475), size=(0.05, 0.05), fillColor=[0, 0.75, 0], lineColor=[0, 0, 0], vertices='circle')
        #        marker.pos = (x_pos * -1, -0.4)
        #        marker.setAutoDraw(True)
        #else:
        #    if 'marker' in locals():
        #        core.wait(0.5)
        #        marker.setAutoDraw(False)
        #        del marker
        #
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *instruction_image* updates
        
        # if instruction_image is starting this frame...
        if instruction_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruction_image.frameNStart = frameN  # exact frame index
            instruction_image.tStart = t  # local t and not account for scr refresh
            instruction_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruction_image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruction_image.started')
            # update status
            instruction_image.status = STARTED
            instruction_image.setAutoDraw(True)
        
        # if instruction_image is active this frame...
        if instruction_image.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in waiting_for_scannerComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "waiting_for_scanner" ---
    for thisComponent in waiting_for_scannerComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('waiting_for_scanner.stopped', globalClock.getTime())
    # check responses
    if key_resp_start.keys in ['', [], None]:  # No response was made
        key_resp_start.keys = None
    thisExp.addData('key_resp_start.keys',key_resp_start.keys)
    if key_resp_start.keys != None:  # we had a response
        thisExp.addData('key_resp_start.rt', key_resp_start.rt)
        thisExp.addData('key_resp_start.duration', key_resp_start.duration)
    thisExp.nextEntry()
    # Run 'End Routine' code from code
    timer = core.Clock(0)
    
    # the Routine "waiting_for_scanner" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "dummy" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('dummy.started', globalClock.getTime())
    # keep track of which components have finished
    dummyComponents = [dummy_fixation_cross]
    for thisComponent in dummyComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "dummy" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 10.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *dummy_fixation_cross* updates
        
        # if dummy_fixation_cross is starting this frame...
        if dummy_fixation_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dummy_fixation_cross.frameNStart = frameN  # exact frame index
            dummy_fixation_cross.tStart = t  # local t and not account for scr refresh
            dummy_fixation_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dummy_fixation_cross, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'dummy_fixation_cross.started')
            # update status
            dummy_fixation_cross.status = STARTED
            dummy_fixation_cross.setAutoDraw(True)
        
        # if dummy_fixation_cross is active this frame...
        if dummy_fixation_cross.status == STARTED:
            # update params
            pass
        
        # if dummy_fixation_cross is stopping this frame...
        if dummy_fixation_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dummy_fixation_cross.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                dummy_fixation_cross.tStop = t  # not accounting for scr refresh
                dummy_fixation_cross.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'dummy_fixation_cross.stopped')
                # update status
                dummy_fixation_cross.status = FINISHED
                dummy_fixation_cross.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in dummyComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "dummy" ---
    for thisComponent in dummyComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('dummy.stopped', globalClock.getTime())
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-10.000000)
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=len(df), method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "rating_switch" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('rating_switch.started', globalClock.getTime())
        rating_instruction_key_resp.keys = []
        rating_instruction_key_resp.rt = []
        _rating_instruction_key_resp_allKeys = []
        # Run 'Begin Routine' code from rating_switch_code
        if trials.thisN == num_stimuli / 2:
            rating_dict = rating_dicts[rating_order[1] - 1]
        else:  
            continueRoutine = False
        # keep track of which components have finished
        rating_switchComponents = [rating_instruction_img, rating_instruction_text, rating_instruction_key_resp]
        for thisComponent in rating_switchComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "rating_switch" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *rating_instruction_img* updates
            
            # if rating_instruction_img is starting this frame...
            if rating_instruction_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rating_instruction_img.frameNStart = frameN  # exact frame index
                rating_instruction_img.tStart = t  # local t and not account for scr refresh
                rating_instruction_img.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rating_instruction_img, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rating_instruction_img.started')
                # update status
                rating_instruction_img.status = STARTED
                rating_instruction_img.setAutoDraw(True)
            
            # if rating_instruction_img is active this frame...
            if rating_instruction_img.status == STARTED:
                # update params
                pass
            
            # *rating_instruction_text* updates
            
            # if rating_instruction_text is starting this frame...
            if rating_instruction_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rating_instruction_text.frameNStart = frameN  # exact frame index
                rating_instruction_text.tStart = t  # local t and not account for scr refresh
                rating_instruction_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rating_instruction_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rating_instruction_text.started')
                # update status
                rating_instruction_text.status = STARTED
                rating_instruction_text.setAutoDraw(True)
            
            # if rating_instruction_text is active this frame...
            if rating_instruction_text.status == STARTED:
                # update params
                pass
            
            # *rating_instruction_key_resp* updates
            waitOnFlip = False
            
            # if rating_instruction_key_resp is starting this frame...
            if rating_instruction_key_resp.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                rating_instruction_key_resp.frameNStart = frameN  # exact frame index
                rating_instruction_key_resp.tStart = t  # local t and not account for scr refresh
                rating_instruction_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rating_instruction_key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rating_instruction_key_resp.started')
                # update status
                rating_instruction_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(rating_instruction_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(rating_instruction_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if rating_instruction_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = rating_instruction_key_resp.getKeys(keyList=['1', '2', '3', '4', '6'], ignoreKeys=["escape"], waitRelease=False)
                _rating_instruction_key_resp_allKeys.extend(theseKeys)
                if len(_rating_instruction_key_resp_allKeys):
                    rating_instruction_key_resp.keys = _rating_instruction_key_resp_allKeys[-1].name  # just the last key pressed
                    rating_instruction_key_resp.rt = _rating_instruction_key_resp_allKeys[-1].rt
                    rating_instruction_key_resp.duration = _rating_instruction_key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in rating_switchComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "rating_switch" ---
        for thisComponent in rating_switchComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('rating_switch.stopped', globalClock.getTime())
        # check responses
        if rating_instruction_key_resp.keys in ['', [], None]:  # No response was made
            rating_instruction_key_resp.keys = None
        trials.addData('rating_instruction_key_resp.keys',rating_instruction_key_resp.keys)
        if rating_instruction_key_resp.keys != None:  # we had a response
            trials.addData('rating_instruction_key_resp.rt', rating_instruction_key_resp.rt)
            trials.addData('rating_instruction_key_resp.duration', rating_instruction_key_resp.duration)
        # the Routine "rating_switch" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "washout" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('washout.started', globalClock.getTime())
        # keep track of which components have finished
        washoutComponents = [washout_fixation_cross]
        for thisComponent in washoutComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "washout" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *washout_fixation_cross* updates
            
            # if washout_fixation_cross is starting this frame...
            if washout_fixation_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                washout_fixation_cross.frameNStart = frameN  # exact frame index
                washout_fixation_cross.tStart = t  # local t and not account for scr refresh
                washout_fixation_cross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(washout_fixation_cross, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'washout_fixation_cross.started')
                # update status
                washout_fixation_cross.status = STARTED
                washout_fixation_cross.setAutoDraw(True)
            
            # if washout_fixation_cross is active this frame...
            if washout_fixation_cross.status == STARTED:
                # update params
                pass
            
            # if washout_fixation_cross is stopping this frame...
            if washout_fixation_cross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > washout_fixation_cross.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    washout_fixation_cross.tStop = t  # not accounting for scr refresh
                    washout_fixation_cross.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'washout_fixation_cross.stopped')
                    # update status
                    washout_fixation_cross.status = FINISHED
                    washout_fixation_cross.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in washoutComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "washout" ---
        for thisComponent in washoutComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('washout.stopped', globalClock.getTime())
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        
        # --- Prepare to start Routine "trial" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('trial.started', globalClock.getTime())
        # Run 'Begin Routine' code from image_trial_code
        df.at[trials.thisN, "onset"] = timer.getTime()
        flipped = False
        movie = visual.MovieStim3(
            win=win, name='movie', units='',
            noAudio = True,
            filename=os.path.join(video_path, df.at[trials.thisN, "category"], df.at[trials.thisN, "file"]),
            ori=0.0, pos=(0, 0), opacity=1.0,
            loop=False, anchor='center',
            size=(1.5, 1.0),
            depth=-1.0,
            )
        # keep track of which components have finished
        trialComponents = [movie]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 3.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from image_trial_code
            if not flipped:
                movie.setFlipHoriz(True)
                flipped = True
            
            # *movie* updates
            
            # if movie is starting this frame...
            if movie.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                movie.frameNStart = frameN  # exact frame index
                movie.tStart = t  # local t and not account for scr refresh
                movie.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(movie, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'movie.started')
                # update status
                movie.status = STARTED
                movie.setAutoDraw(True)
            
            # if movie is stopping this frame...
            if movie.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > movie.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    movie.tStop = t  # not accounting for scr refresh
                    movie.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'movie.stopped')
                    # update status
                    movie.status = FINISHED
                    movie.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial" ---
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('trial.stopped', globalClock.getTime())
        # Run 'End Routine' code from image_trial_code
        df.at[trials.thisN, "duration"] = timer.getTime() - df.at[trials.thisN, "onset"]
        movie.stop()  # ensure movie has stopped at end of Routine
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-3.000000)
        
        # --- Prepare to start Routine "rating" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('rating.started', globalClock.getTime())
        # Run 'Begin Routine' code from rating_code
        ## Clear key buffer
        keys = event.getKeys(keyList=['1', '2', '3', '4', '6'])
        
        # keep track of which components have finished
        ratingComponents = [rating_fixation_square]
        for thisComponent in ratingComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "rating" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 5.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from rating_code
            keys = event.getKeys(keyList=['1', '2', '3', '4', '6'])
            
            if keys:
                df.at[trials.thisN, "rating"] = rating_dict[keys[0]]
                df.at[trials.thisN, "response_time"] = timer.getTime()
                df.at[trials.thisN, "button"] = keys[0]
                print(f"Trial: {trials.thisN}. Rating is: {rating_dict[keys[0]]}")
                continueRoutine = False
            
            # *rating_fixation_square* updates
            
            # if rating_fixation_square is starting this frame...
            if rating_fixation_square.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rating_fixation_square.frameNStart = frameN  # exact frame index
                rating_fixation_square.tStart = t  # local t and not account for scr refresh
                rating_fixation_square.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rating_fixation_square, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rating_fixation_square.started')
                # update status
                rating_fixation_square.status = STARTED
                rating_fixation_square.setAutoDraw(True)
            
            # if rating_fixation_square is active this frame...
            if rating_fixation_square.status == STARTED:
                # update params
                pass
            
            # if rating_fixation_square is stopping this frame...
            if rating_fixation_square.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > rating_fixation_square.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    rating_fixation_square.tStop = t  # not accounting for scr refresh
                    rating_fixation_square.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rating_fixation_square.stopped')
                    # update status
                    rating_fixation_square.status = FINISHED
                    rating_fixation_square.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ratingComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "rating" ---
        for thisComponent in ratingComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('rating.stopped', globalClock.getTime())
        # Run 'End Routine' code from rating_code
        # Timeout rating
        if keys is None:
            df.at[trials.thisN, "rating"] = pd.NA
            df.at[trials.thisN, "response_time"] = pd.NA
            df.at[trials.thisN, "button"] = pd.NA
            print(f"Trial: {trials.thisN}. Rating is: {pd.NA}")
           
        # Save data
        if not os.path.exists(f"data/{participant}"):
            os.makedirs(f"data/{participant}")
            
        df.to_csv(f"data/{participant}/sub-{int(participant):02}_ses-{int(session):02}_task-video_run-{run}_events.tsv", index=False, sep="\t")
            
        
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-5.000000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed len(df) repeats of 'trials'
    
    
    # --- Prepare to start Routine "washout" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('washout.started', globalClock.getTime())
    # keep track of which components have finished
    washoutComponents = [washout_fixation_cross]
    for thisComponent in washoutComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "washout" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *washout_fixation_cross* updates
        
        # if washout_fixation_cross is starting this frame...
        if washout_fixation_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            washout_fixation_cross.frameNStart = frameN  # exact frame index
            washout_fixation_cross.tStart = t  # local t and not account for scr refresh
            washout_fixation_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(washout_fixation_cross, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'washout_fixation_cross.started')
            # update status
            washout_fixation_cross.status = STARTED
            washout_fixation_cross.setAutoDraw(True)
        
        # if washout_fixation_cross is active this frame...
        if washout_fixation_cross.status == STARTED:
            # update params
            pass
        
        # if washout_fixation_cross is stopping this frame...
        if washout_fixation_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > washout_fixation_cross.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                washout_fixation_cross.tStop = t  # not accounting for scr refresh
                washout_fixation_cross.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'washout_fixation_cross.stopped')
                # update status
                washout_fixation_cross.status = FINISHED
                washout_fixation_cross.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in washoutComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "washout" ---
    for thisComponent in washoutComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('washout.stopped', globalClock.getTime())
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    
    # --- Prepare to start Routine "end" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('end.started', globalClock.getTime())
    # keep track of which components have finished
    endComponents = [end_text]
    for thisComponent in endComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 10.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *end_text* updates
        
        # if end_text is starting this frame...
        if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_text.frameNStart = frameN  # exact frame index
            end_text.tStart = t  # local t and not account for scr refresh
            end_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'end_text.started')
            # update status
            end_text.status = STARTED
            end_text.setAutoDraw(True)
        
        # if end_text is active this frame...
        if end_text.status == STARTED:
            # update params
            pass
        
        # if end_text is stopping this frame...
        if end_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > end_text.tStartRefresh + 10.0-frameTolerance:
                # keep track of stop time/frame for later
                end_text.tStop = t  # not accounting for scr refresh
                end_text.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'end_text.stopped')
                # update status
                end_text.status = FINISHED
                end_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in endComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in endComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('end.stopped', globalClock.getTime())
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-10.000000)
    
    # mark experiment as finished
    endExperiment(thisExp, win=win, inputs=inputs)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, inputs=None, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()


def quit(thisExp, win=None, inputs=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    inputs : dict
        Dictionary of input devices by name.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    inputs = setupInputs(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win, 
        inputs=inputs
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win, inputs=inputs)
