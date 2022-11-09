import http from '../elements/HttpRequest'
import ResumeProps from '../../types/resume.type'

class ResumeDataService {
    getAll() {
        return http.get<Array<ResumeProps>>('resume')
    }
}

export default new ResumeDataService()
