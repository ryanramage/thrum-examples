#!/usr/bin/env node
const { setup, connect, bars, toMidi, operators } = require('thrum')
const config = setup({
  livecoding: true,
  input: { 1: 'IAC Driver IAC Bus 2' },
  output: { 1: 'IAC Driver Bus 1' }
})
const initialState = {}
const dispatchers = { toMidi }
connect(config, initialState, dispatchers, tick)

function tick (input) {
  return bars(input, [4, '4n'], [
    [1, intro],
    [4, firstVerse],
    [1, chorus],
    [4, outro],
    [5, chorus],
    [12, outro],
    [4, secondVerse]
  ])
}

function intro (input) {
  operators.d(3, '4n', input).bang(['toMidi', {note: 'C4', channel: 0}])
  operators.d(4, '4n', input).bang(state.operators)

  return {state}
}

function firstVerse ({state, spp}) {
  let actions = []
  if (onBeat(spp, '1n')) actions.push(['toMidi', {note: 'D4', channel: 0}])
  if (onBeat(spp, '4n')) actions.push(['toMidi', {note: 'F5', channel: 1}])
  return {state, actions}
}
function secondVerse ({state, spp}) {
  let actions = []
  if (onBeat(spp, '1n')) actions.push(['toMidi', {note: 'E4', channel: 0}])
  if (onBeat(spp, '4n')) actions.push(['toMidi', {note: 'G5', channel: 1}])
  return {state, actions}
}
function chorus ({state, spp}) {
  let actions = []
  if (onBeat(spp, '8n')) actions.push(['toMidi', {note: 'A2', channel: 1}])
  return {state, actions}
}
function outro ({state, spp}) {  let actions = []
  if (onBeat(spp, '2n')) actions.push(['toMidi', {note: 'B2', channel: 1}])
  return {state, actions}
}
