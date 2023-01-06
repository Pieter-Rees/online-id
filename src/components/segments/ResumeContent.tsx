import http from '../elements/HttpRequest'
import ResumeProps from '../../types/resume.type'

class ResumeDataService {
    async getAll() {
        return await http.get<ResumeProps[]>('resume')
    }
}

export default new ResumeDataService()
