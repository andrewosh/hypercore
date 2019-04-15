var create = require('./helpers/create')
var tape = require('tape')

tape('hash copy', function (t) {
  var a = create()

  a.ready(function () {
    var b = create(a.key)

    a.append(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], function () {
      a.proof(0, {hash: true}, function (err, proof) {
        t.error(err, 'no error')
        b.put(0, null, proof, function (err) {
          t.error(err, 'no error')
          a.proof(4, {hash: true, digest: b.digest(4)}, function (err, proof) {
            t.error(err, 'no error')
            b.put(4, null, proof, function (err) {
              t.error(err, 'no error')
              t.end()
            })
          })
        })
      })
    })
  })
})

// tests below was generated by a randomizer triggering different replication edge cases

tape('chaos monkey generated #1', function (t) {
  var ops = []
  ops.push({type: 'append', value: '998'})
  ops.push({type: 'copy', block: 0, from: 'feed', to: 'clone1'})
  runOps(t, ops)
})

tape('chaos monkey generated #2', function (t) {
  var ops = []
  ops.push({type: 'append', value: '993'})
  ops.push({type: 'append', value: '992'})
  ops.push({type: 'append', value: '991'})
  ops.push({type: 'copy', block: 0, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '984'})
  ops.push({type: 'copy', block: 1, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '982'})
  ops.push({type: 'copy', block: 0, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 3, from: 'feed', to: 'clone1'})
  runOps(t, ops)
})

tape('chaos monkey generated #3', function (t) {
  var ops = []
  ops.push({type: 'append', value: '996'})
  ops.push({type: 'append', value: '994'})
  ops.push({type: 'copy', block: 1, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 1, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '991'})
  ops.push({type: 'append', value: '990'})
  ops.push({type: 'append', value: '988'})
  ops.push({type: 'append', value: '985'})
  ops.push({type: 'copy', block: 5, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 5, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '981'})
  ops.push({type: 'append', value: '980'})
  ops.push({type: 'append', value: '976'})
  ops.push({type: 'append', value: '974'})
  ops.push({type: 'append', value: '972'})
  ops.push({type: 'append', value: '971'})
  ops.push({type: 'append', value: '969'})
  ops.push({type: 'copy', block: 8, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 8, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '965'})
  ops.push({type: 'copy', block: 6, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 3, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '961'})
  ops.push({type: 'copy', block: 6, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '957'})
  ops.push({type: 'append', value: '956'})
  ops.push({type: 'copy', block: 3, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '953'})
  ops.push({type: 'append', value: '952'})
  ops.push({type: 'append', value: '951'})
  ops.push({type: 'append', value: '950'})
  ops.push({type: 'copy', block: 17, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '947'})
  ops.push({type: 'append', value: '946'})
  ops.push({type: 'copy', block: 18, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '944'})
  ops.push({type: 'copy', block: 22, from: 'feed', to: 'clone1'})
  runOps(t, ops)
})

tape('chaos monkey randomized #4', function (t) {
  var ops = []
  ops.push({type: 'append', value: '490'})
  ops.push({type: 'append', value: '483'})
  ops.push({type: 'append', value: '479'})
  ops.push({type: 'append', value: '476'})
  ops.push({type: 'append', value: '472'})
  ops.push({type: 'append', value: '470'})
  ops.push({type: 'copy', block: 1, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '461'})
  ops.push({type: 'copy', block: 2, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '459'})
  ops.push({type: 'copy', block: 1, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '455'})
  ops.push({type: 'append', value: '450'})
  ops.push({type: 'copy', block: 2, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '447'})
  ops.push({type: 'append', value: '446'})
  ops.push({type: 'append', value: '444'})
  ops.push({type: 'append', value: '443'})
  ops.push({type: 'copy', block: 5, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 5, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '432'})
  ops.push({type: 'append', value: '431'})
  ops.push({type: 'append', value: '430'})
  ops.push({type: 'copy', block: 16, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '427'})
  ops.push({type: 'append', value: '426'})
  ops.push({type: 'copy', block: 16, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '421'})
  ops.push({type: 'append', value: '420'})
  ops.push({type: 'copy', block: 4, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '415'})
  ops.push({type: 'append', value: '411'})
  ops.push({type: 'copy', block: 4, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '407'})
  ops.push({type: 'append', value: '405'})
  ops.push({type: 'append', value: '401'})
  ops.push({type: 'append', value: '399'})
  ops.push({type: 'append', value: '398'})
  ops.push({type: 'copy', block: 24, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 9, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 24, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '390'})
  ops.push({type: 'append', value: '389'})
  ops.push({type: 'copy', block: 9, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 11, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 23, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '384'})
  ops.push({type: 'copy', block: 0, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '380'})
  ops.push({type: 'copy', block: 26, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 29, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '371'})
  ops.push({type: 'copy', block: 15, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 27, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '366'})
  ops.push({type: 'copy', block: 11, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 29, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 15, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '357'})
  ops.push({type: 'copy', block: 0, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '351'})
  ops.push({type: 'append', value: '349'})
  ops.push({type: 'copy', block: 23, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 8, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 27, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 14, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 14, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '330'})
  ops.push({type: 'copy', block: 8, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '328'})
  ops.push({type: 'append', value: '327'})
  ops.push({type: 'append', value: '326'})
  ops.push({type: 'append', value: '324'})
  ops.push({type: 'copy', block: 26, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '314'})
  ops.push({type: 'append', value: '313'})
  ops.push({type: 'append', value: '312'})
  ops.push({type: 'append', value: '308'})
  ops.push({type: 'append', value: '307'})
  ops.push({type: 'append', value: '306'})
  ops.push({type: 'append', value: '303'})
  ops.push({type: 'append', value: '300'})
  ops.push({type: 'copy', block: 46, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '295'})
  ops.push({type: 'append', value: '292'})
  ops.push({type: 'append', value: '291'})
  ops.push({type: 'copy', block: 46, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '288'})
  ops.push({type: 'append', value: '277'})
  ops.push({type: 'copy', block: 51, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 39, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '271'})
  ops.push({type: 'append', value: '269'})
  ops.push({type: 'copy', block: 45, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '264'})
  ops.push({type: 'copy', block: 51, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '262'})
  ops.push({type: 'copy', block: 20, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '259'})
  ops.push({type: 'copy', block: 45, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 39, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '256'})
  ops.push({type: 'append', value: '253'})
  ops.push({type: 'append', value: '252'})
  ops.push({type: 'copy', block: 56, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '249'})
  ops.push({type: 'append', value: '248'})
  ops.push({type: 'copy', block: 52, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 53, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '239'})
  ops.push({type: 'append', value: '237'})
  ops.push({type: 'append', value: '236'})
  ops.push({type: 'append', value: '233'})
  ops.push({type: 'append', value: '231'})
  ops.push({type: 'copy', block: 20, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '227'})
  ops.push({type: 'copy', block: 53, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '225'})
  ops.push({type: 'copy', block: 56, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 52, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '220'})
  ops.push({type: 'copy', block: 49, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '216'})
  ops.push({type: 'copy', block: 49, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '214'})
  ops.push({type: 'append', value: '213'})
  ops.push({type: 'append', value: '212'})
  ops.push({type: 'append', value: '210'})
  ops.push({type: 'append', value: '208'})
  ops.push({type: 'append', value: '205'})
  ops.push({type: 'append', value: '200'})
  ops.push({type: 'copy', block: 30, from: 'feed', to: 'clone1'})
  ops.push({type: 'copy', block: 80, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '195'})
  ops.push({type: 'append', value: '194'})
  ops.push({type: 'append', value: '192'})
  ops.push({type: 'copy', block: 30, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '188'})
  ops.push({type: 'append', value: '187'})
  ops.push({type: 'copy', block: 80, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '185'})
  ops.push({type: 'copy', block: 61, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '182'})
  ops.push({type: 'append', value: '181'})
  ops.push({type: 'append', value: '180'})
  ops.push({type: 'copy', block: 44, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '172'})
  ops.push({type: 'append', value: '171'})
  ops.push({type: 'copy', block: 72, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '166'})
  ops.push({type: 'append', value: '164'})
  ops.push({type: 'append', value: '162'})
  ops.push({type: 'append', value: '161'})
  ops.push({type: 'copy', block: 19, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '157'})
  ops.push({type: 'copy', block: 72, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 25, from: 'feed', to: 'clone1'})
  ops.push({type: 'append', value: '149'})
  ops.push({type: 'append', value: '146'})
  ops.push({type: 'append', value: '142'})
  ops.push({type: 'append', value: '141'})
  ops.push({type: 'append', value: '133'})
  ops.push({type: 'copy', block: 61, from: 'clone1', to: 'clone2'})
  ops.push({type: 'copy', block: 19, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '126'})
  ops.push({type: 'copy', block: 25, from: 'clone1', to: 'clone2'})
  ops.push({type: 'append', value: '123'})
  ops.push({type: 'copy', block: 81, from: 'feed', to: 'clone1'})
  runOps(t, ops)
})

tape('chaos monkey randomized', function (t) {
  var feed = create()
  var clone1
  var clone2
  var names = ['feed', 'clone1', 'clone2']
  var runs = 500
  var repro = '  var ops = []\n'

  feed.ready(function () {
    clone1 = create(feed.key)
    clone2 = create(feed.key)
    clone1.ready(function () {
      clone2.ready(loop)
    })
  })

  function loop () {
    if (--runs === 0) return t.end()
    if (Math.random() < 0.3) {
      repro += '  ops.push({type: \'append\', value: \'' + runs + '\'})\n'
      return feed.append('' + runs, loop)
    }
    if (Math.random() < 0.5) return process.nextTick(loop)

    var from = [feed, clone1, clone2][(Math.random() * 3) | 0]
    var to = null
    if (from === clone1) to = clone2
    else if (from === clone2) to = clone1
    else to = [clone1, clone1][(Math.random() * 2) | 0]

    var blk = -1
    var seen = 0

    for (var i = 0; i < from.length; i++) {
      if (!from.has(i) || to.has(i)) continue
      if (Math.random() < 1 / ++seen) blk = i
    }

    if (blk === -1) return process.nextTick(loop)

    repro += '  ops.push({type: \'copy\', block: ' + blk + ', from: \'' + name(from) + '\', to: \'' + name(to) + '\'})\n'
    copy(blk, from, to, function (err) {
      if (err) {
        t.fail('failed to copy ' + blk + ' from ' + name(from) + ' to ' + name(to))
        t.end()
        repro += '  runOps(t, ops)\n'
        console.error('tape(\'chaos monkey randomized\', function (t) {\n' + repro + '})')
        return
      }

      t.pass('copied ' + blk + ' from ' + name(from) + ' to ' + name(to))
      loop()
    })
  }

  function name (f) {
    return names[[feed, clone1, clone2].indexOf(f)]
  }
})

function runOps (t, ops) {
  var feed = create()
  var clone1
  var clone2

  feed.ready(function () {
    clone1 = create(feed.key)
    clone2 = create(feed.key)
    clone1.ready(function () {
      clone2.ready(loop)
    })
  })

  function get (name) {
    if (name === 'feed') return feed
    if (name === 'clone1') return clone1
    return clone2
  }

  function loop () {
    var next = ops.shift()
    if (!next) {
      t.end()
      return
    }
    if (next.type === 'append') {
      feed.append(next.value, loop)
      return
    }
    if (next.type === 'copy') {
      copy(next.block, get(next.from), get(next.to), function (err) {
        if (err) {
          t.fail('failed to copy ' + next.block + ' from ' + next.from + ' to ' + next.to)
          t.end()
          return
        }
        t.pass('copied ' + next.block + ' from ' + next.from + ' to ' + next.to)
        loop()
      })
    }
  }
}

function copy (index, from, to, cb) {
  from.proof(index, {digest: to.tree.digest(2 * index)}, function (err, proof) {
    if (err) return cb(err)
    from.get(index, function (err, data) {
      if (err) return cb(err)
      to.put(index, data, proof, cb)
    })
  })
}
