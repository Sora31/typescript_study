import { expect } from 'chai'
import * as request from 'supertest'
import app from '../src/app'

describe('app.test', () => {
    const req = request(app)

    it('GET /', async () => {
        const res = await req.get('/').expect(200)
        expect(res.text).to.equal('Hello World!')
    })

    it('GET /not_found', async () => {
        const res = await req.get('/not_found').expect(404)
        expect(res.body.message).to.equal('Not Found')
    })
})