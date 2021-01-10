import { create } from "~/server/models/user.model";

export const actions = {
    async create({ commit }, data) {
        try {
            return await this.$axios.$post('/api/comment', data)
        } catch (e) {
            commit('setError', e, { root: true })
        }
    }
}