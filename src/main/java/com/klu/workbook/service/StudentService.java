package com.klu.workbook.service;

import com.klu.workbook.model.Student;
import com.klu.workbook.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student addStudent(Student student){
        return repo.save(student);
    }

    public List<Student> getStudents(){
        return repo.findAll();
    }

    public Student updateStudent(Long id, Student student){
        Optional<Student> existing = repo.findById(id);

        if(existing.isPresent()){
            Student s = existing.get();
            s.setName(student.getName());
            s.setEmail(student.getEmail());
            s.setCourse(student.getCourse());
            return repo.save(s);
        }

        return null;
    }

    public void deleteStudent(Long id){
        repo.deleteById(id);
    }
}