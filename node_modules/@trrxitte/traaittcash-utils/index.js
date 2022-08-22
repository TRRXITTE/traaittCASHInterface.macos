// Copyright (c) Lucas Jones
// Copyright (c) 2014-2017, MyMonero.com
// Copyright (c) 2016, Paul Shapiro
// Copyright (c) 2017, Luigi111
// Copyright (c) 2022 TRRXITTE Int., incorporate
// Copyright (c) 2018-2019, The TurtCoin Developers
//
// Please see the included LICENSE file for more information.

'use strict'

const Block = require('./lib/block')
const BlockTemplate = require('./lib/blocktemplate')
const Crypto = require('./lib/traaittcash-crypto')
const CryptoNote = require('./lib/cryptonote')
const EventEmitter = require('events')
const LevinPacket = require('./lib/levinpacket')
const Transaction = require('./lib/transaction')

class traaittCASHUtils extends EventEmitter {
  constructor () {
    super()

    const preload = new Crypto()
    const that = this

    function check () {
      if (!preload.isReady) {
        setTimeout(check, 100)
      } else {
        that.emit('ready')
      }
    }

    check()
  }

  get Block () {
    return Block
  }

  get BlockTemplate () {
    return BlockTemplate
  }

  get Crypto () {
    return Crypto
  }

  get CryptoNote () {
    return CryptoNote
  }

  get LevinPacket () {
    return LevinPacket
  }

  get Transaction () {
    return Transaction
  }
}

module.exports = new traaittCASHUtils()
